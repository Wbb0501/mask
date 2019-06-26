export default class Location {
    static getLocation(callback) {
        if (navigator.geolocation) {
            let options = {
                enableHighAccuracy: true,
                maximumAge: 0,
            };
            navigator.geolocation.getCurrentPosition(
                (res) => {
                    console.log("get location successful:" + res);
                    let location = {};
                    location.longitude = res.coords.longitude;
                    location.latitude = res.coords.latitude;

                    const pointBak = new BMap.Point(location.longitude, location.latitude);
                    const convertor = new BMap.Convertor();
                    convertor.translate([pointBak], 1, 5,function(resPoint) {
                        if(resPoint && resPoint.points && resPoint.points.length>0){
                            location.longitude = resPoint.points[0].lng;
                            location.latitude = resPoint.points[0].lat;
                        }
                        callback.success(location);
                    });
                },
                (res) => {
                    console.log("get location failed:" + res);
                    callback.error(res);
                },
                options
            );
        } else {
            callback.error("Geo location not supported.");
        }
    }
}