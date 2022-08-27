from flask import Flask, flash, redirect, render_template, request, session
from flask_session import Session
import datetime
import requests
from vehicles import vehicles
import datetime






# Configure application

app = Flask(__name__)

# API
planets = requests.get("https://api.le-systeme-solaire.net/rest/bodies/")


# configure session
# Configure session to use filesystem (instead of signed cookies)


# Ensure templates are auto-reloaded
app.config["TEMPLATES_AUTO_RELOAD"] = True





@app.context_processor
def weather():
    temperatures = []
    for planet in planets.json()["bodies"]:
        if planet["isPlanet"] == True:
            temperatures.append({"Name": planet["englishName"], "Temp": round(planet["avgTemp"] - 273.15,2), "TempF": round(((planet["avgTemp"] - 273.15) * 1.8) + 32,2) })

    return dict(planets= planets.json()["bodies"],temperatures=temperatures)




@app.route('/',methods=["GET", "POST"])
def travel():
    time = datetime.datetime.now()
    if request.method == "POST":
        if not request.form.get("departure"):
            error = "Select departure"
            return render_template("error.html",error=error)
        if not request.form.get("destination"):
            error = "Select destination"
            return render_template("error.html",error=error)
        if not request.form.get("vehicleselect"):
            error="Select vehicle"
            return render_template("error.hmtl", error=error)
        else:
            destination= request.form.get("destination")
            departure = request.form.get("departure")
            chosenVehicle = request.form.get("vehicleselect").split("-")[0]
            speed = request.form.get("vehicleselect").split()[-1].split("k")[0]


            perihelion_departure = requests.get(f"https://api.le-systeme-solaire.net/rest/bodies/{departure}").json()["perihelion"]
            perihelion_destination = requests.get(f"https://api.le-systeme-solaire.net/rest/bodies/{destination}").json()["perihelion"]

            if perihelion_departure > perihelion_destination:
                distance = perihelion_departure - perihelion_destination


            else:
                distance = perihelion_destination - perihelion_departure

            travel_hours = distance / float(speed)
            travel_days = travel_hours / 24
            travel_years = travel_days / 365
            months = (travel_years % 1) * 12
            weeks = (months % 1) * 4.29
            days = (weeks % 1) * 7
            try:
                eta = datetime.date.today() + datetime.timedelta(days=travel_days)
                strEta=eta.strftime("%d-%m-%Y")
            except OverflowError:
                strEta = 'Humanity went extinct by this time'


            return render_template("travel.html",
            days=round(days),
            eta=strEta,
            months=round(months),
            weeks=round(weeks),
            travel_years=round(travel_years),
            distance=distance,
            time=time.strftime("%d-%m-%Y"),
            planets=planets.json()['bodies'],
            departure=departure,
            destination=destination,
            vehicles=vehicles,
            chosenVehicle=chosenVehicle,
            speed=speed)
            # calculate the distance (see astrotravel doc!)
    return render_template("index.html",time=time.strftime("%d-%m-%Y"),planets=planets.json()['bodies'], vehicles=vehicles)


    # ABOUT PAGE
@app.route('/about', methods=["GET"])
def about():
    # access word doc where you got the information stored
    return render_template("About.html")


@app.route('/solarsystem',methods=["GET"])
def solar_system():
    solarplanets = []
    sun = {}
    for star in planets.json()["bodies"]:
        if star["englishName"] == "Sun":
            sun = {"Name": star["englishName"], "diameter": round(star["meanRadius"] + star["equaRadius"],2)}
    for planet in planets.json()["bodies"]:
        if planet["isPlanet"] == True:
            moons = []
            try:
                for moon in planet["moons"]:
                    moons.append(moon["moon"])
            except TypeError:
                print("not a moon")
            solarplanets.append({"Name": planet["englishName"], "perihelion": planet["perihelion"], "diameter": round(planet["meanRadius"] + planet["equaRadius"],2), "gravity": planet["gravity"],"moons": len(moons)})

    # get perihelion of planet
    def get_perihelion(planet):
        return planet.get('perihelion')
    # sort by perihelion
    solarplanets.sort(key=get_perihelion)



    return render_template("SolarSystem.html",solarplanets=solarplanets,sun=sun)


# astrotravel plus
@app.route("/astrotravelplus",methods=["GET"])
def astroTravelPlus():
    return render_template("AstroTravelPlus.html")

# vehicle info
@app.route("/vehicleinfo", methods=["GET"])
def vehicleInfo():
    return render_template("VehicleInfo.html")