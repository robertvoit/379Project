 
    /*Constructor not used, may be useful later.*/
    function event(name, location, description, category, date) {
        this.name = name;
        this.location = location;
        this.description = description;
        this.category = category;
        this.date = date;
    }
    
    /*JSON array for objects to be parsed.*/
    var jsonEvents = ['{"name":"Bingo","location":"Packard","description":"Bingo Night","category":"Entertainment","date":"2016-10-25T17:30:00"}'
        ,'{"name":"Musical","location":"Zoellener","description":"School Production","category":"University Events","date":"2016-10-25T19:30:00"}'
        ,'{"name":"Alumni Meeting","location":"Alumni Memorial","description":"Dinner","category":"Fundraising","date":"2016-10-26T18:00:00"}'
        ,'{"name":"Google Meeting","location":"Packard","description":"Company Info Session","category":"Recruiting","date":"2016-10-26T15:00:00"}'
        ,'{"name":"Class Meeting","location":"Packard","description":"Info Session","category":"Recruiting","date":"2016-10-26T15:00:00"}'
        ,'{"name":"Meeting","location":"Packard","description":"Session","category":"Recruiting","date":"2016-10-26T15:00:00"}'
        ,'{"name":"Music Show","location":"Packard","description":"Battle of the Bands","category":"University Events","date":"2016-10-26T19:00:00"}'
        ,'{"name":"Swim Meet","location":"Taylor","description":"Lehigh vs. Laf","category":"Sports","date":"2016-10-25T15:30:00"}'];
   
    //globals
    var objs = [];
    var contentString = [];
    var events = [];
    var map; 
    
    /**Initalizes events to be displayed on the map. 
     * 
     * @param {type} building
     * @returns {locationMatch.location}
     */
    function initEvents(){
        //this function takes the JSON array above and automatically parses it into an object array
        objs = jsonEvents.map(JSON.parse);
        //takes the date of each object and turns it into a date object
        for(var i = 0; i < objs.length; i++){
            //console.log(objs[i].date);
            var d = new Date(objs[i].date);
            objs[i].date = d;
        }
        
        //sort events by first date to last date
        objs.sort(dateComp);
        
        //builds the contentString
        buildContent();
        /*This for loop isn't used right now, but may be useful later. It takes each event's names location and converts it to
         * a lat Long
         */
        for(var i = 0; i < objs.length; i++){
            //console.log(objs[i].location);
            var loc = locationMatch(objs[i].location);
            objs[i].location = loc;
            //console.log(objs[i].location);
        }
        //console.log(contentString[1][1].content);
        //console.log(contentString[1][1].location);
        console.log("initialized events");
    }
    
    /* Comparison function for date object.*/
    function dateComp(a,b){
        if (a.date < b.date) {
          return -1;
        }
        if (a.date > b.date) {
          return 1;
        }
        // a must be equal to b
        return 0;
    }
    
    /** Takes a building Name and returns its lat long.
     * 
     * @param {type} building
     * @returns {locationMatch.location}
     */
    function locationMatch(building){
        var location;
        switch(building){
        case "Packard":
            location = {lat: 40.607801, lng: -75.378957};
            break;
        case "Alumni Memorial":
            location = {lat: 40.606791, lng: -75.380148};
            break;
        case "Zoellener":
            location = {lat: 40.607874, lng: -75.372525};
            break;
        case "Taylor":
            location = {lat: 40.607239, lng: -75.374059};
            break;
        default:
            location = {lat: 40.607047, lng: -75.37754};
            break;
        }
        return location;
    }
    
    /**Big function. This function builds the multidimensional array contentString that shows the location and description of
     * events on campus. The events are already organized by date at this point. The function counts the amount of days included
     * in the events. Initializes two arrays to be multidimensional with the appropriate amount of days. Fills the events array
     * with each event that happens on each day. Then it sorts each day of events by building name so the same buildings are
     * next to each other in the array. Then it uses this to build the contentString array such that events in the same building
     * will show up on the same marker. That is the complicated part. See documentation below. No return value. Updates contentString
     * to have the all the by day, location, and formats them so they can be taken by googleMaps APIs.
     * @returns {null}
     */
    function buildContent(){
        //dates are sorted by this point
        //get number of dates included in events
        var dateNum = 1; //assume atleast one event
        var currentDate = objs[0].date.getDate();
        for(var i = 0; i < objs.length; i++){
            //console.log(objs[i].date.getDate());
            if(objs[i].date.getDate() !== currentDate){
                currentDate = objs[i].date.getDate();
                dateNum++;
            }
        }
        console.log(dateNum);
        for(var x = 0; x < dateNum; x++){ //temporary, makes the mutlidimensional array have wasted space
          events[x] = [];
          contentString[x] = [];
        }
        
        //var eventNum = 1;
        currentDate = objs[0].date.getDate();
        dateNum = 1; //workaround, the dateNum will be the same after the next function
        console.log(currentDate);
        //creates multidimensional array sorted by first date to last date
        for(var i = 0; i < objs.length; i++){
            if(objs[i].date.getDate() !== currentDate){
                currentDate = objs[i].date.getDate();
                dateNum++;
                events[dateNum-1].push(objs[i]);
            }
            else{
                events[dateNum-1].push(objs[i]);
            }
        }
        
       //console.log(events);
        
        //sort events by events so same locations are next to eachother in array
        for(var i = 0; i < dateNum; i++){
            events[i].sort(function(a,b){
                if (a.location < b.location) {
                    return -1;
                }
                if (a.location > b.location) {
                    return 1;
                }
                // a must be equal to b
                return 0;
            });
        }
        
        /*
        console.log(events[0][0].location);
        console.log(events[0][1].location);
        console.log(events[0][2].location);
        console.log(events[1][0].location);
        console.log(events[1][1].location);
        console.log(events[1][2].location);
        */
       
       //console.log(contentString);
       
       /*Optimize later. Currently O(n^3). Builds contentString. Each contentString object will have two attributes. 
        * .content: Stores formatted string to be displayed on html. .location: stores lat/long of building to be displayed
        * 
        * This works by looping through each member in the events array. If the next building in the array is the same as
        * the current building being looked at, then it adds the event to the current building array and continues. If the
        * next building doesn't exist it catches that error and moves on. If it gets to the next part it assumes there are no
        * more buildings of the same type for that day and pushes that event to the array to be formatted. It then loops through
        * every event in current building list and adds them to the formatted string. Then it builds an object containing
        * the formatted string and the lat long of currentBuilding. It pushes that to the current day of contentString and resets
        * the currentBuildingArray before looping again.
        * @type Number
        */
       for(var i = 0; i < dateNum; i++){
           var currentBuilding = "null";
           var currentBuildingArray = [];
                for(var k = 0; k < events[i].length; k++){
                    try{
                        currentBuilding = events[i][k].location;
                        if(currentBuilding === events[i][k+1].location){
                            console.log(events[i][k].location + "hey");
                            currentBuildingArray.push(events[i][k]);
                            continue;
                        }
                    }
                    catch(err){ //DANGEROUS: temporary use, only meant to catch unfinined array reference
                        console.log("Out of bound array search:" + currentBuilding + i + k);
                    }
                        currentBuildingArray.push(events[i][k]);
                        var buildString = "<div>"+"<div>"+"</div>"+"<h1>"+ currentBuildingArray[0].location +'</h1>';
                        for(var j = 0; j < currentBuildingArray.length;j++){
                           buildString = buildString +"<div>"+"<h3>"+ currentBuildingArray[j].name +'</h3>'+"<p> Description:"+ currentBuildingArray[j].description + "</p>" +"<p> Category:"+ currentBuildingArray[j].category + "</p>" +"<p> Date:"+ currentBuildingArray[j].date + "</p>";
                        }
                        buildString = buildString +"</div>"+"</div>";
                        var infoBuild = "<div>"+"<h1>"+ currentBuildingArray[0].location +'</h1>';
                        var eventNum = 0;
                        for(var j = 0; j < currentBuildingArray.length;j++){
                            eventNum++;
                        }
                        infoBuild = infoBuild + eventNum + " events in  "+currentBuildingArray[0].location +" today. "+"</div>";
                        var strObj = {info: infoBuild, content: buildString, location: locationMatch(currentBuilding)};
                        contentString[i].push(strObj);
                        
                        currentBuildingArray = [];
                    
                }
           
       }
       //console.log(contentString);//[0][2]);
       //console.log(events);//[0][2].name);
    }
    
    function writeEvents(event) {
        document.getElementById('textbox').innerHTML = event;
    }
    function eraseEvents(){
        document.getElementById('textbox').innerHTML = "<p>No Event to Display</p>";
    }
    
    
      //initializes the map,centered at Lehigh
      
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 40.607047, lng: -75.37754},
          zoom: 17,
          streetViewControl: false
          
        });
        
        //custom marker on front lawn
        var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
        var beachMarker = new google.maps.Marker({
          position: {lat: 40.607047, lng: -75.37754},
          properties: {name: 'Lehigh'},
          map: map,
          icon: image
        });
    }
    
    //old hardcoded building lat longs
    /*
    var buildings = [
        [{lat: 40.607801, lng: -75.378957}, //Packard
        {lat: 40.606076, lng: -75.378217},
        {lat: 40.606644, lng: -75.376972},
        {lat: 40.606791, lng: -75.380148}],
        [
        {lat: 40.607874, lng: -75.372525},  
        {lat: 40.607239, lng: -75.374059}, //taylor
        {lat: 40.608379, lng: -75.378587},
        {lat: 40.606709, lng: -75.375561}]
         ];
    */
   
   //more globals to be used below
    var on = 0;
    var init = 0;
    var infoWindow;
    var markers = [];
    var buildingCount = 0; //dayCount
    
    /**Moves the date forward one day. Markers are uninitialized and cleared. If there are no more days in calendar alert.
     * 
     * @returns {undefined}
     */
    function change(){
        if(buildingCount < events.length -1){
            clearMarkers();
            markers = [];
            buildingCount++;
            init = 0;
        }
        else{
            alert("No more days in calendar");
        }
        
    }
    /**Moves the date back one day. Markers are uninitialized and cleared. If there are no more days in calendar alert.
     * 
     * @returns {undefined}
     */
     function changeBack(){
        if(buildingCount > 0){
            clearMarkers();
            markers = [];
            buildingCount--;
            init = 0;
        }
        else{
            alert("No more days in calendar");
        }
        
    }
    
    /**Makes an array of marker objects to be displayed on the map for the current day requested. Takes info from content string 
     * for location and content to display for each marker. It also makes an infowindow for each building and
     * adds an event listener to each marker so it will show the correct infoWindow when the marker is clicked.
     * @returns {undefined}
     */
    function initMarkers(){
        for (var i = 0; i < contentString[buildingCount].length; i++) {
                //addMarker(buildings[i]);
                markers.push(new google.maps.Marker({
                position: contentString[buildingCount][i].location,
                map: map,
                animation: google.maps.Animation.DROP,
                info: contentString[buildingCount][i].info,
                content: contentString[buildingCount][i].content
                }));
                
                infoWindow = new google.maps.InfoWindow({ content: contentString[buildingCount][i].info });
                google.maps.event.addListener( markers[i], 'click', function() {
                    var event = this.content;
                    infoWindow.setContent( this.info );
                    infoWindow.open( map, this );
                    writeEvents(event);

                 });
            }
        }
       /* 
    if(init === 1){    
        for(var i = 0; i < markers.length; i++){
                google.maps.event.addListener(markers[i],'click', function() {
                    //this.setTitle(contentString[i]);
                    infowindow[i].open(map, this); //causing problems, find another way to do it
             });
     }*/
    
    /*Function for Display Markers Button. When clicked, if markers aren't initialized then it initializes them. 
     * If the markers aren't displayed then it takes the array of initialized markers and puts them on the map.
     * If the are displayed then it clears them off the map.
     * @returns {undefined}
     */
    function drop() {
        if(init === 0){
            initMarkers();
            init = 1;
        }
        if(on === 0){
           for (var i = 0; i < markers.length; i++) {
                markers[i].setMap(map);
            }
           on = 1;
        }
        else{
            clearMarkers();
            on = 0;
        }
      }
      /*
      function addMarker(position) {
          markers.push(new google.maps.Marker({
            position: position,
            map: map,
            animation: google.maps.Animation.DROP
          }));
      }*/
                        
      /*Clears markers from map.*/
      function clearMarkers(){
          for (var i = 0; i < markers.length; i++) {
                markers[i].setMap(null);
            }
            eraseEvents();
      }                  
      
      //initialize events on page load
      window.onload = initEvents;


