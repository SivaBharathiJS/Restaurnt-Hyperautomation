# importing geopy library
from geopy.geocoders import Nominatim

# calling the Nominatim tool
loc = Nominatim(user_agent="GetLoc")

# entering the location name
getLoc = loc.geocode("colachel")
# entering the location name
getLoc1 = loc.geocode("nagercoil")

# printing address
print(getLoc.address)
print(getLoc1.address)

# printing latitude and longitude
a=getLoc.latitude
b=getLoc.longitude
a1=getLoc1.latitude
b1=getLoc1.longitude


from math import sin, cos, sqrt, atan2, radians

def get_distance(lat1, lng1, lat2, lng2):
    # approximate radius of earth in km
    R = 6373.0

    lat1_r = radians(lat1)
    lng1_r = radians(lng1)
    lat2_r = radians(lat2)
    lng2_r = radians(lng2)

    dlat = lat2_r - lat1_r
    dlng = lng2_r - lng1_r

    a = sin(dlat / 2)**2 + cos(lat1_r) * cos(lat2_r) * sin(dlng / 2)**2
    c = 2 * atan2(sqrt(a), sqrt(1 - a))

    distance = R * c

    return distance



distance_km = get_distance(a,b,a1,b1)

print(f"The distance  is {distance_km:.2f} kilometers.")
