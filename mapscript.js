/*var data = {
        get_data:
            $.ajax({
                type: "GET",
                url: "events.json",
                dataType: "json",
                sucess: function(){
                    console.log("received");
                },
                failure: function(){
                    alert("json Failed to load");
                }
            })
        };*/
    
    /*Constructor not used, may be useful later.*/
    function event(name, location, description, category, date) {
        this.name = name;
        this.location = location;
        this.description = description;
        this.category = category;
        this.date = date;
    }
    
    /*JSON array for objects to be parsed.*/
    /*
   var jsonEvents = ['{"name":"Bingo","location":"Packard","description":"Bingo Night","category":"Entertainment","date":"2016-10-25T17:30:00"}'
        ,'{"name":"Musical","location":"Zoellener","description":"School Production","category":"University Events","date":"2016-10-25T19:30:00"}'
        ,'{"name":"Alumni Meeting","location":"Alumni Memorial","description":"Dinner","category":"Fundraising","date":"2016-10-26T18:00:00"}'
        ,'{"name":"Google Meeting","location":"Packard","description":"Company Info Session","category":"Recruiting","date":"2016-10-26T15:00:00"}'
        ,'{"name":"Class Meeting","location":"Packard","description":"Info Session","category":"Recruiting","date":"2016-10-26T15:00:00"}'
        ,'{"name":"Meeting","location":"Packard","description":"Session","category":"Recruiting","date":"2016-10-26T15:00:00"}'
        ,'{"name":"Music Show","location":"Packard","description":"Battle of the Bands","category":"University Events","date":"2016-10-26T19:00:00"}'
        ,'{"name":"Swim Meet","location":"Taylor","description":"Lehigh vs. Laf","category":"Sports","date":"2016-10-25T15:30:00"}'];
   */
    //globals
    
    var jsonEvents = [{"name":"Four O'clock Exam Day 4","location":"On-Campus","address":"","description":"","summary":"Four O'clock Exam Day 4","category":"Registrar's Office","date":"2016-11-09T00:00:00"},
{"name":"Candidate for the Vice President for Equity and Community Open Discussion","location":"Alumni Memorial Building","address":"27 Memorial Drive West","description":"","summary":"A candidate for the Vice President for Equity and Community will provide a Presentation and Open Discussion to the campus community at 4:00 p.m. in the Admissions Theater, Alumni Memorial Building on November 9th.","category":"","date":"2016-11-09T16:00:00"},
{"name":"Colloquium: Bruno de Oliveira, University of Miami at Coral Gables","location":"Christmas-Saucon Hall","address":"","description":"","summary":"Weekly Department Colloquium features Bruno de Oliveira from the University of Miami in Florida.","category":"Mathematics","date":"2016-11-09T16:10:00"},
{"name":"Lehigh in Scotland Information Session","location":"Maginnes Hall","address":"9 West Packer Avenue","description":"","summary":"Come learn about earning 6 credits studying abroad in Scotland next summer on an archaeological dig!","category":"Study Abroad","date":"2016-11-09T16:10:00"},
{"name":"Seminar: Professor Ming An, Binghamton University","location":"Neville Hall","address":"6 A East Packer Avenue","description":"","summary":"Seminar: Professor Ming An, Binghamton University","category":"Chemistry","date":"2016-11-09T16:10:00"},
{"name":"Global Cuisine Presents France","location":"On-Campus","address":"","description":"","summary":"Please come to Rathbone to taste the French cuisine!","category":"International Week","date":"2016-11-09T16:30:00"},
{"name":"Pushing the Envelopes: Censorship and Social Media in Southeast Asia","location":"Williams Hall","address":"31 Williams Drive","description":"","summary":"There will be Lehigh professors to speak about the new social media age and censorship policies that are currently found in certain Southeast Asian countries. It will be engaging, informative, and open discussion.","category":"International Week","date":"2016-11-09T16:30:00"},
{"name":"Friendsgiving","location":"University Center","address":"29 Trembley Drive","description":"","summary":"Share a free traditional Thanksgiving meal with fellow Lehigh students, faculty, staff and community members. Make some friends and enjoy a uniquely American tradition!","category":"International Week","date":"2016-11-09T17:00:00"},
{"name":"Spin","location":"Taylor Gym","address":"","description":"","summary":"Spin is a great way to stay in shape and burn calories fast.  It's an intense, vigorous workout where we ride to the beat of powerful music. Spinning helps tone muscles while building the cardiovascular system. Come ride with us!","category":"Group Fitness","date":"2016-11-09T17:30:00"},
{"name":"Zumba","location":"Taylor Gym","address":"","description":"","summary":"Zumba is an exhilarating, effective, easy-to-follow, Latin-inspired, calorie-burning dance-fitness class that combines intervals of fast and slow rhythms to tone and sculpt your body while burning fat.","category":"Group Fitness","date":"2016-11-09T17:30:00"},
{"name":"Women ONLY (R.A.D.) Rape Aggression Defense Program Classes","location":"","address":"","description":"","summary":"The LUPD would like to remind students, staff and faculty that we are, once again, offering self-defense instruction through the Rape Aggression Defense, or RAD Program.","category":"University Police","date":"2016-11-09T18:00:00"},
{"name":"Learn to Play Squash at Taylor Gym: Session II","location":"Taylor Gym","address":"","description":"","summary":"Taylor Gym will offer two sessions this fall to help you learn the sport of squash with a starter course in the fundamentals. Each session will run 3 weeks and offer 6 lessons.","category":"Athletics","date":"2016-11-09T18:30:00"},
{"name":"Strength and Core","location":"Taylor Gym","address":"","description":"","summary":"Experience the benefits of strength training and core conditioning using a variety of equipment, including weighted body bars, dumb bells, and resistance tubing. This fun, energetic class uses intense and powerful music to motivate and drive you.","category":"Group Fitness","date":"2016-11-09T19:00:00"},
{"name":"Tartuffe By Molière: Translated By Richard Wilbur","location":"Zoellner Arts Center","address":"420 East Packer Avenue","description":"","summary":"This French comedy comes to life in a sparkling English verse translation. Orgon has taken into his home the righteous, pious and virtuous Tartuffe. When the rest of the family doubts Tartuffe’s virtue, traps are set, masks are dropped.","category":"Zoellner Arts Center","date":"2016-11-09T19:30:00"},
{"name":"...Of The Americas: Contemporary Latin American Art","location":"Zoellner Arts Center","address":"420 East Packer Avenue","description":"","summary":"Latin American Art Is American Art. Abstraction, conceptualism, the politics of identity.","category":"Art Galleries","date":"2016-11-10T00:00:00"},
{"name":"Four O'clock Exam Day 5","location":"On-Campus","address":"","description":"","summary":"Four O'clock Exam Day 5","category":"Registrar's Office","date":"2016-11-10T00:00:00"},
{"name":"Visual and Verbal: The Deborah and Alfred Judson Barcan Collection, An Exhibit in Linderman Library","location":"Linderman Library","address":"30 Library Drive","description":"","summary":"Please visit the Linderman exhibit featuring highlights of the Barcans’ gift to Special Collections. On display are selected works of Mark Twain, Walter Crane, William Morris, and Lewis Carroll, as well as early New York City guidebooks.","category":"","date":"2016-11-10T00:00:00"},
{"name":"Changes to Flexible Benefits Information Sessions","location":"","address":"","description":"","summary":"Human Resources is hosting information sessions to introduce the changes to Lehigh's 2017 Flexible Benefits Plan. Light refreshments will be provided.","category":"Human Resources","date":"2016-11-10T12:00:00"},
{"name":"Financing Study Abroad: You Can't Afford NOT to Go","location":"Rauch Business Center","address":"621 Taylor Street","description":"","summary":"This will be a session about internal and external scholarships and financial aid for studying abroad.","category":"International Week","date":"2016-11-10T12:00:00"},
{"name":"Gender in a Global Context","location":"University Center","address":"","description":"","summary":"Please join the event and have a close look at how Thai culturally treats food and it's connection to gender roles!","category":"International Week","date":"2016-11-10T12:00:00"},
{"name":"Info Session on Spring Break Trip to Israel-Palestine","location":"Dialogue Center","address":"","description":"","summary":"The focus of the trip (March 10-19, 2017) will be on inter-religious encounter and dialogue as a way to peace.  Come to the info session to hear more details and how to apply.","category":"Dialogue Center","date":"2016-11-10T12:00:00"},
{"name":"Loi Krathong & Thai Beauty Standards: A Gender in a Global Context","location":"University Center","address":"29 Trembley Drive","description":"","summary":"A Gender in a Global Context Discussion: Loi Krathong and Thai Beauty Standards","category":"Women's Center","date":"2016-11-10T12:00:00"},
{"name":"Sustainable Sushi Lunch","location":"Lamberton Hall","address":"690 Taylor Street","description":"","summary":"Join Eco-Reps and Global Union for Sustainable Sushi Lunch!","category":"Student Activities and Sustainability","date":"2016-11-10T12:00:00"},
{"name":"Strength and Core","location":"Taylor Gym","address":"","description":"","summary":"Experience the benefits of strength training and core conditioning using a variety of equipment, including weighted body bars, dumb bells, and resistance tubing. This fun, energetic class uses intense and powerful music to motivate and drive you.","category":"Group Fitness","date":"2016-11-10T12:10:00"},
{"name":"Yoga Flow","location":"Taylor Gym","address":"","description":"","summary":"Experience the benefits of yoga through a sequence of dynamic stretching and strengthening postures that will bring you towards a deeper awareness of your physical body. By matching breath to movement, you will begin to find more balance in your life","category":"Group Fitness","date":"2016-11-10T12:10:00"},
{"name":"Colloquium with Brooks Thomas, Lafayette College","location":"Sherman Fairchild Center for the Physical Sciences","address":"16 Memorial Walk East","description":"","summary":"You're cordially invited to attend Prof. Thomas'seminar entitled Re-invisioning the Invisible: A New Perspective on the Dark-Matther Puzzle Thursday, November 10, 2016 at 4:10PM in LL 512.","category":"Physics","date":"2016-11-10T16:10:00"},
{"name":"Grief, Love, and Memory in Modern Tibetan Buddhism","location":"Linderman Library","address":"30 Library Drive","description":"","summary":"Each year, the Friends of the Lehigh University Libraries sponsor a talk by a newer member of the Lehigh University faculty designed to share faculty research with a broader campus and community audience.","category":"Friends of the Libraries","date":"2016-11-10T16:10:00"},
{"name":"International Relations Efron Speaker: Jennifer Dixon","location":"Maginnes Hall","address":"9 West Packer Avenue","description":"","summary":"Changing the State's Story: The Politics of Dark Pasts in Turkey and Japan","category":"International Relations","date":"2016-11-10T16:10:00"},
{"name":"Zero Motivation","location":"University Center","address":"29 Trembley Drive","description":"","summary":"There will an Isralie film screening, Zero Motivation, a comedy about women serving in the Israeli Army.  The film, which is a smart, funny, and candid look at female roles in the army and a unique take on Israeli culture.","category":"International Week","date":"2016-11-10T16:15:00"},
{"name":"Bootycamp","location":"Taylor Gym","address":"","description":"","summary":"This high intensity total body conditioning class will get your heart rate up and blood pumping! Focus will be on strengthening and toning your lower body, in particular the lower abdominals, legs, and glutes!","category":"Group Fitness","date":"2016-11-10T16:30:00"},
{"name":"CAS-Join the Dialogue Salam Neighbor","location":"Zoellner Arts Center","address":"420 East Packer Avenue","description":"","summary":"Salam Neighbor Film Screening followed by discussion with Zach Ingrasci, Filmmaker. Join the Dialogue event","category":"Interdisiplinary Programs","date":"2016-11-10T17:00:00"},
{"name":"Salam Neighbor Screening and Keynote","location":"Zoellner Arts Center","address":"420 East Packer Avenue","description":"","summary":"Zach Ingrasci, a film-maker, will be brought to campus to discuss his documentary. Salam Neighbor, which follows the lives of Zach and a friend.","category":"International Week","date":"2016-11-10T17:00:00"},
{"name":"International Poetry Night","location":"Off-Campus","address":"","description":"","summary":"Readers will recite poetry in a language of their choosing, while the original and an English translation will be displayed.","category":"International Week","date":"2016-11-10T18:00:00"},
{"name":"Sri Lankan Culture Night","location":"On-Campus","address":"","description":"","summary":"Please come and join this event to learn the culture from the Sri Lankan student!","category":"International Week","date":"2016-11-10T18:00:00"},
{"name":"Power Yoga","location":"Taylor Gym","address":"","description":"","summary":"Power Yoga is a challenging style of yoga designed to build strength, flexibility, stamina, and balance.  The core of each class is based upon a vinyasa flow that includes a series of sun salutations, balance-challenging standing postures.","category":"Group Fitness","date":"2016-11-10T18:45:00"},
{"name":"Donnel Foster Hewett Symposium: Signicance of a Changing Arctic","location":"On-Campus","address":"","description":"","summary":"Earth and Environmental Sciences Department  2016 Donnel Foster Hewett Symposium  Signicance of a Changing Arctic","category":"Earth and Environmental","date":"2016-11-10T19:00:00"},
{"name":"Everyday Feminist Book Discussion Group","location":"University Center","address":"29 Trembley Drive","description":"","summary":"This discussion group is open to everyone on campus, even if you are new to the topic. Come discuss contemporary and celebrity feminism in Andi Zeisler's We Were Feminists Once.","category":"Women's Center","date":"2016-11-10T19:00:00"},
{"name":"Thursday Night Trivia","location":"Lamberton Hall","address":"690 Taylor Street","description":"","summary":"Come out to the Hawk's Nest at 10 PM every Thursday night to compete in Thursday Night Trivia! There will be music, food, and lots of prizes to win!","category":"Lehigh After Dark","date":"2016-11-10T22:00:00"},
{"name":"Bartram’s Boxes REMIX Gallery Exhibit","location":"Zoellner Arts Center","address":"420 East Packer Avenue","description":"","summary":"When 13 trees fell at Bartram’s Garden during a huge storm in 2010, the Philadelphia Center for Art in Wood put out a call to artists, inviting them to propose and create new works using the fallen wood and other materials in the spirit of the garden","category":"Art Galleries","date":"2016-11-11T00:00:00"},
{"name":"Online Harassment Training Reminder Deadline","location":"","address":"","description":"","summary":"Online harassment training is accessed through coursesite.lehigh.edu. Students: compliance-student-harassment; Faculty and Staff: compliance-work-harassment2. Training must be completed prior to November 11, 2016.  inogc@lehigh.edu w/questions","category":"General Counsel","date":"2016-11-11T00:00:00"},
{"name":"MHDI/CITL Workshop: Introduction to WordPress for Humanists","location":"Linderman Library","address":"30 Library Drive","description":"","summary":"This workshop will teach you how to use the digital publishing tool WordPress, and will provide ideas for how to use WordPress in research and teaching. This workshop is for beginners who have never built a website or blog before.","category":"LTS","date":"2016-11-11T09:00:00"},
{"name":"Eating Disorders in College: A Feminist Friday Discussion","location":"University Center","address":"29 Trembley Drive","description":"","summary":"This discussion will focus on eating disorders in college. Snacks provided.","category":"Women's Center","date":"2016-11-11T12:00:00"},
{"name":"International Internships","location":"Maginnes Hall","address":"9 West Packer Avenue","description":"","summary":"This will be an info session about international internships, including Iacocca International Internships Program.","category":"International Week","date":"2016-11-11T12:00:00"},
{"name":"Men's Cross Country: Lehigh vs NCAA Mid-Atlantic Regional","location":"Off-Campus","address":"","description":"","summary":"Men's Cross Country: Lehigh vs NCAA Mid-Atlantic Regional","category":"Athletics","date":"2016-11-11T12:00:00"},
{"name":"Pre-Law Luncheon II: Use Data to Learn about Law and Law Schools","location":"Williams Hall","address":"31 Williams Drive","description":"","summary":"Learn how to use data provided on a number of websites to explore law schools and a legal career. Lunch is provided. RSVP to attend.","category":"Career & Prof. Develoment","date":"2016-11-11T12:00:00"},
{"name":"Pushing the Envelope and Tackling Tough Topics Together: Divided Nations","location":"Coxe Hall","address":"32 Sayre Drive","description":"","summary":"Our professor and students will discuss a very sensitive topic between China and Taiwan.","category":"","date":"2016-11-11T12:00:00"},
{"name":"Women's Cross Country: Lehigh vs NCAA Mid-Atlantic Regional","location":"Off-Campus","address":"","description":"","summary":"Women's Cross Country: Lehigh vs NCAA Mid-Atlantic Regional","category":"Athletics","date":"2016-11-11T12:00:00"},
{"name":"Cardio Kickboxing","location":"Taylor Gym","address":"","description":"","summary":"A fun and invigorating training program designed to challenge you both mentally and physically.  Incorporating high intensity kicking routines with upper body drills, this class will help you increase your stamina, coordination, and strength.","category":"Group Fitness","date":"2016-11-11T12:10:00"},
{"name":"Spin","location":"Taylor Gym","address":"","description":"","summary":"Spin is a great way to stay in shape and burn calories fast.  It's an intense, vigorous workout where we ride to the beat of powerful music. Spinning helps tone muscles while building the cardiovascular system.  Come ride with us.","category":"Group Fitness","date":"2016-11-11T12:10:00"},
{"name":"Drop in Nutrition Counseling at Taylor Gym","location":"Taylor Gym","address":"","description":"","summary":"New this year!  Carrie Gerencher, the on campus registered dietitian, will have office hours at Taylor Gym on Mondays from 11-1pm and Fridays 1-3pm.  There will be a sign up sheet in the main workout area if you'd like to meet with her.","category":"Dining Services","date":"2016-11-11T13:00:00"}];
   
    
    var objs = [];
    var contentString = [];
    var events = [];
    var map; 
    var currentDate;
    //var jsonEvents;
    
    /**Initalizes events to be displayed on the map. 
     * 
     * @param {type} building
     * @returns {locationMatch.location}
     */
    function initEvents(){
        /*data.get_data.done(function(d){
            objs = d["jsonEvents"].map(JSON.parse);
        });
        alert("loading");*/
        //this function takes the JSON array above and automatically parses it into an object array
        /*jQuery.get('eventsInfo.json', function(data) {
            jsonEvents = data;
        });*/
        //objs = jsonEvents.map(JSON.parse);
        //JSON.parse('[object Object]')
        //objs = jsonEvents.map(JSON.parse('[object Object]'));
        //objs = jsonEvents.map(JSON.parse);
        
        var parsed = jsonEvents;

        objs = [];

        for(var x in parsed){
          objs.push(parsed[x]);
        }
        //takes the date of each object and turns it into a date object
        for(var i = 0; i < objs.length; i++){
            //console.log(objs[i].date);
            var d = new Date(objs[i].date);
            objs[i].date = d;
            //console.log(objs[i].date);
        }
        
        //sort events by first date to last date
        objs.sort(dateComp);
        console.log(objs[0]);
        console.log(objs[0].date);
        
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
        currentDate  = objs[0].date;
        writeDate();
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
                           buildString = buildString +"<div>"+"<h3>"+ currentBuildingArray[j].name +'</h3>'+"<p> Summary:"+ currentBuildingArray[j].summary + "</p>" +"<p> Category:"+ currentBuildingArray[j].category + "</p>" +"<p> Date:"+ currentBuildingArray[j].date + "</p>";
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
    function writeDate(){
        document.getElementById('dateBox').innerHTML = currentDate.toDateString();
    }
    function eraseEvents(){
        document.getElementById('textbox').innerHTML = "<p>No Event to Display</p>";
    }
    
    
      //initializes the map,centered at Lehigh
      
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 40.607047, lng: -75.37754},
          zoom: 16,
          streetViewControl: false
          
        });
        /*
        //custom marker on front lawn
        var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
        var beachMarker = new google.maps.Marker({
          position: {lat: 40.607047, lng: -75.37754},
          properties: {name: 'Lehigh'},
          map: map,
          icon: image
        });*/
        
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
            currentDate = events[buildingCount][0].date;
            writeDate();
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
            currentDate = events[buildingCount][0].date;
            writeDate();
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
        case "436 Brodhead Avenue":
            location = {lat: 40.609326, lng: -75.381446};
            break;
        case "Biological Sciences' Faculty Office":
            location = {lat: 40.607010, lng: -75.381457};
            break;
        case "Building C":
            location = {lat: 40.600781, lng: -75.362075};
            break;
        case "Chandler-Ullmann Hall":
            location = {lat: 40.607430, lng: -75.376224};
            break;
        case "Christmas-Saucon Hall/Annex":
            location = {lat: 40.607995, lng: -75.377149};
            break;
        case "Coppee Hall":
            location = {lat: 40.605975, lng: -75.376631};
            break;
        case "Coxe Hall":
            location = {lat: 40.606062, lng: -75.375781};
            break;
        case "Drown Hall":
            location = {lat: 40.605728, lng: -75.377173};
            break;
        case "Fritz Engineering Laboratory":
            location = {lat: 40.608011, lng: -75.376406};
            break;
        case "Mohler Laboratory":
            location = {lat: 40.607467, lng: -75.381843};
            break;
        case "Iacocca Hall":
            location = {lat: 40.601490, lng: -75.359985};
            break;
        case "Imbt Laboratories":
            location = {lat: 40.604644, lng: -75.360406};
            break;
        case "Jewish Student Center":
            location = {lat: 40.606286, lng: -75.381585};
            break;
        case "Johnson Hall":
            location = {lat: 40.605349, lng: -75.378029};
            break;
        case "Zoellener":
            location = {lat: 40.607874, lng: -75.372525};
            break;
        case "Maginnes Hall":
            location = {lat: 40.608903, lng: -75.378871};
            break;
        case "Neville Hall":
            location = {lat: 40.608526, lng: -75.377272};
            break;
        case "Packard Laboratory":
            location = {lat: 40.607799, lng: -75.378957};
            break;
        case "Philosophy Building":
            location = {lat: 40.608037, lng: -75.378101};
            break;
        case "Price Hall":
            location = {lat: 40.605918, lng: -75.375084};
            break;
        case "Rauch Business Center":
            location = {lat: 40.608206, lng: -75.373731};
            break;
        case "Seeley G. Mudd Building":
            location = {lat: 40.608473, lng: -75.376830};
            break;
        case "Sherman Fairchild Center for the Physical Sciences":
            location = {lat: 40.607634, lng: -75.374636};
            break;
        case "STEPS":
            location = {lat: 40.608313, lng: -75.378939};
            break;
        case "Sherman Fairchild Laboratory for Solid State Studies":
            location = {lat: 40.607306, lng: -75.375432};
            break;
        case "Sinclair Laboratory":
            location = {lat: 40.609094, lng: -75.377144};
            break;
        case "Small Business Development Center":
            location = {lat: 40.609064, lng: -75.372546};
            break;
        case "Whitaker Laboratory":
            location = {lat: 40.608801, lng: -75.376398};
            break;
        case "Wilbur Annex":
            location = {lat: 40.608105, lng: -75.375738};
            break;
        case "Wilbur Powerhouse":
            location = {lat: 40.607940, lng: -75.375518};
            break;
        case "Williams Hall":
            location = {lat: 40.606771, lng: -75.375580};
            break;
        case "Zoellner Arts Center":
            location = {lat: 40.608043, lng: -75.372734};
            break;
        case "E.W. Fairchild-Martindale Library and Computing Center":
            location = {lat: 40.609070, lng: -75.378050};
            break;
        case "Linderman Library":
            location = {lat: 40.606577, lng: -75.376961};
            break;
        case "Alumni Memorial Building":
            location = {lat: 40.606822, lng: -75.380236};
            break;
        case "125 Goodman":
            location = {lat: 40.587726, lng: -75.350987};
            break;
        case "301 Broadway":
            location = {lat: 40.610325, lng: -75.382667};
            break;
        case "422 Brodhead Avenue":
            location = {lat: 40.609603, lng: -75.381709};
            break;
        case "516 Brodhead Avenue":
            location = {lat: 40.607404, lng: -75.381188};
            break;
        case "520 Brodhead Avenue":
            location = {lat: 40.607217, lng: -75.381170};
            break;
        case "524 Brodhead Avenue":
            location = {lat: 40.607217, lng: -75.381170};
            break;
        case "616 Brodhead Avenue":
            location = {lat: 40.606227, lng: -75.381226 };
            break;
        case "Barnett House":
            location = {lat: 40.601490, lng: -75.359985};
            break;
        case "Ben Franklin Technology Partners":
            location = {lat: 40.600138, lng: -75.365666};
            break;
        case "Development Annex":
            location = {lat: 40.605863, lng: -75.381132};
            break;
        case "Environmental Health and Safety":
            location = {lat: 40.607241, lng: -75.381733};
            break;
        case "Facilities Services and Campus Planning":
            location = {lat: 40.608632, lng: -75.375494};
            break;
        case "Gatehouse, Mountaintop":
            location = {lat: 40.600260, lng: -75.366050};
            break;
        case "Human Resources":
            location = {lat: 40.609457, lng: -75.381634};
            break;
        case "IDEAL":
            location = {lat: 40.605594, lng: -75.375403};
            break;
        case "Jordan Hall":
            location = {lat: 40.599715, lng: -75.364913};
            break;
        case "President's House":
            location = {lat: 40.606463, lng: -75.379370};
            break;
        case "Sayre Building":
            location = {lat: 40.606418, lng: -75.380051};
            break;
        case "Service Building":
            location = {lat: 40.610792, lng: -75.376878};
            break;
        case "Transportation Services":
            location = {lat: 40.585779, lng: -75.349651};
            break;
        case "University Police Department":
            location = {lat: 40.585779, lng: -75.349651};
            break;
        case "230 W. Packer House":
            location = {lat: 40.607437, lng: -75.382068};
            break;
        case "Beardslee House (Centennial II)":
            location = {lat: 40.606948, lng: -75.371876};
            break;
        case "Brodhead House":
            location = {lat: 40.609943, lng: -75.379979};
            break;
        case "Farrington Square":
            location = {lat: 40.609597, lng: -75.378646};
            break;
        case "Carothers House (Centennial II)":
            location = {lat: 40.607007, lng: -75.372208};
            break;
        case "Centennial I Commons":
            location = {lat: 40.606284, lng: -75.372804};
            break;
        case "Diamond House":
            location = {lat: 40.579250, lng: -75.353253};
            break;
        case "Gibson House":
            location = {lat: 40.579472, lng: -75.354103 };
            break;
        case "Hartman House":
            location = {lat: 40.579511, lng: -75.354919};
            break;
        case "House 104":
            location = {lat: 40.603264, lng: -75.378970};
            break;
        case "McClintic-Marshall House":
            location = {lat: 40.604857, lng: -75.377543};
            break;
        case "Sayre Park Village":
            location = {lat: 40.601619, lng: -75.381473};
            break;
        case "Taylor House":
            location = {lat: 40.604814, lng: -75.378380};
            break;
        case "Umoja House":
            location = {lat: 40.604103, lng: -75.377683};
            break;
        case "Lamberton Hall":
            location = {lat: 40.605535, lng: -75.376143};
            break;
        case "Rathbone Hall":
            location = {lat: 40.606640, lng: -75.372882};
            break;
        case "Packer Memorial Church":
            location = {lat: 40.607712, lng: -75.377626};
            break;
        case "University Center":
            location = {lat: 40.606142, lng: -75.378037};
            break;
        case "Banko Field":
            location = {lat: 40.586598, lng: -75.358336};
            break;
        case "Corallo Place":
            location = {lat: 40.585889, lng: -75.354334};
            break;
        case "Cross Country Start and Finish":
            location = {lat: 40.590484, lng: -75.354731};
            break;
        case "Cundey Varsity House":
            location = {lat: 40.584596, lng: -75.360356};
            break;
        case "Field Shop":
            location = {lat: 40.580320, lng: -75.360975};
            break;
        case "Gould-Shenfeld Center":
            location = {lat: 40.586598, lng: -75.358336};
            break;
        case "Grace Hall":
            location = {lat: 40.606256, lng: -75.374520};
            break;
        case "Kaufman Fields: Soccer Practice":
            location = {lat: 40.588423, lng: -75.353787};
            break;
        case "Leadership Park":
            location = {lat: 40.587307, lng: -75.352328};
            break;
        case "Legacy Park":
            location = {lat: 40.585645, lng: -75.361134};
            break;
        case "Lewis Tennis Center":
            location = {lat: 40.581290, lng: -75.359489};
            break;
        case "Mistele Family Pavilion":
            location = {lat: 40.585588, lng: -75.358937};
            break;
        case "Mulvihill Golf Learning Center":
            location = {lat: 40.591144, lng: -75.363678};
            break;
        case "Murray H. Goodman Stadium":
            location = {lat: 40.589189, lng: -75.355439};
            break;
        case "North Parking Lot–Tailgate Area":
            location = {lat: 40.590672, lng: -75.356662};
            break;
        case "Outdoor Track":
            location = {lat: 40.581693, lng: -75.361801};
            break;
        case "Rauch Field House":
            location = {lat: 40.584720, lng: -75.358792};
            break;
        case "Rust Family Pavilion":
            location = {lat: 40.585873, lng: -75.354978};
            break;
        case "Sayre Field Comfort Station":
            location = {lat: 40.601547, lng: -75.371849};
            break;
        case "South Lot–Club Sports Fields":
            location = {lat: 40.584268, lng: -75.352929};
            break;
        case "South Parking Lot–Tailgate Area":
            location = {lat: 40.584936, lng: -75.355675};
            break;
        case "Stabler Arena and Convocation Center":
            location = {lat: 40.585282, lng: -75.357381};
            break;
        case "Stadium House":
            location = {lat: 40.589881, lng: -75.355525};
            break;
        case "Taylor Gym":
            location = {lat: 40.607207, lng: -75.374196};
            break;
        case "Ulrich Astroturf Field":
            location = {lat: 40.586761, lng: -75.357177};
            break;
        case "Ulrich Grass Soccer Field":
            location = {lat: 40.586468, lng: -75.359795};
            break;
        case "Ulrich Tennis Courts":
            location = {lat: 40.581660, lng: -75.359312};
            break;
        case "Whitehead Football Practice Fields":
            location = {lat: 40.583502, lng: -75.361437};
            break;
        case "Alumni Parking Pavilion":
            location = {lat: 40.606559, lng: -75.380614};
            break;
        case "Farrington Square Parking Garage":
            location = {lat: 40.609383, lng: -75.379134};
            break;
        case "Zoellner Arts Center Parking Garage":
            location = {lat: 40.608379, lng: -75.372106};
            break;              
        default:
            location = {lat: 40.607047, lng: -75.37754};
            break;
        }
        return location;
    }


