
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import javax.xml.parsers.DocumentBuilder;
import org.w3c.dom.Document;
import org.w3c.dom.NodeList;
import org.w3c.dom.Node;
import org.w3c.dom.Element;
import java.io.File;
import java.util.regex.Pattern;
import java.util.regex.Matcher;
import java.io.PrintWriter;

public class event {
	
	String name;
	String description;
	String summary;
	String start_date_time;
	String end_time;
	String url;
	String location;
	String category;
	String address;
	
	event(String n, String d, String s, String sdt, String et, String u, String l, String c,String ad){
		name=n;
		description=d;
		summary=s;
		start_date_time=sdt;
		end_time=et;
		url=u;
		location=l;
		category=c;
		address=ad;
	}
	
	public static String eventPrint(event e){
		//prints out string in appropriate JSON format
		//order= name, location, address, description, summary, category, date/time, end time, url
		String name_part="\"name\":\""+e.name+"\",";
		String location_part="\"location\":\""+e.location+"\",";
		String address_part="\"address\":\""+e.address+"\",";
		String description_part="\"description\":\""+e.description+"\",";
		String summary_part="\"summary\":\""+e.summary+"\",";
		String category_part="\"category\":\""+e.category+"\",";
		String date_time_part="\"date\":\""+e.start_date_time+"\"";
		//String end_time_part="\"end-time\":\""+e.end_time+"\",";
		//String url_part="\"url\":\""+e.url+"\"";
		String finished_part=name_part+location_part+address_part+description_part+summary_part+category_part+date_time_part;  //end_time_part+url_part;
		return finished_part;
	}
	//replaces quotes w. \" in all fields so that they will be the proper format for json
	public static void quoteClean(event e){
		e.name=e.name.replace("\"", "\\\"");
		e.location=e.location.replace("\"", "\\\"");
		e.address=e.address.replace("\"", "\\\"");
		e.description=e.description.replace("\"", "\\\"");
		e.summary=e.summary.replace("\"", "\\\"");
		e.category=e.category.replace("\"", "\\\"");
		e.start_date_time=e.start_date_time.replace("\"", "\\\"");
		e.end_time=e.end_time.replace("\"", "\\\"");
		e.url=e.url.replace("\"", "\\\"");
	}
	
	public static void locationClean(event e){
		//writes correct building name in location field based of addresses
		if (e.address!=null){
			switch(e.address){
				case "31 Williams Drive":
					e.location="Williams Hall";
					break;
				case "151 Goodman Drive":
					e.location="Bank Field (Men's & Women's Lacrosse)";
					break;
				case "6A East Packer Avenue":
					e.location="Neville Hall";
					break;
				case "6 A East Packer Avenue":
					e.location="Neville Hall";
					break;
				case "420 East Packer Avenue":
					e.location="Zoellner Arts Center";
					break;
				case "32 Sayre Drive":
					e.location="Coxe Hall";
					break;
				case "5 East Packer Avenue":
					e.location="Whitaker Laboratory";
					break;
				case "27 Memorial Drive West":
					e.location="Alumni Memorial Building";
					break;
				case "1 West Packer Avenue":
					e.location="STEPS";
					break;
				case "19 Memorial Drive West":
					e.location="Packard Laboratory";
					break;
				case "690 Taylor Street":
					e.location="Lamberton Hall";
					break;
				case "29 Trembley Drive":
					e.location="University Center";
					break;
				case "224 West Packer Avenue":
					e.location="Humanities Center";
					break;
				case "16 Memorial Walk East":
					e.location="Sherman Fairchild Center for the Physical Sciences";
					break;
				case "30 Library Drive":
					e.location="Linderman Library";
					break;
				case "9 West Packer Avenue":
					e.location="Maginnes Hall";
					break;
				case "621 Taylor Street":
					e.location="Rauch Business Center";
					break;
			}
			
		}
		
	}
	public static void main(String argv[]) {
		//hardcoded test event
		event test = new event(" birkel \"smash\" bash","smash tournament every saturday hosted by toby","smash tourney","12-sat","5","yes.com","ucB25","gaming","446");
		quoteClean(test);
		//System.out.println(test.name);
		event[] eventList=new event[50];
		try {
			//opens local xmp file named events.xml and prepares it to be read
			File fXmlFile = new File("events.xml");
			DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
			DocumentBuilder dBuilder = dbFactory.newDocumentBuilder();
			Document doc = dBuilder.parse(fXmlFile);

			//optional, but recommended
			//read this - http://stackoverflow.com/questions/13786607/normalization-in-dom-parsing-with-java-how-does-it-work
			doc.getDocumentElement().normalize();

			//System.out.println("Root element :" + doc.getDocumentElement().getNodeName());
			
			NodeList nList = doc.getElementsByTagName("event"); //nList is list of event tags
			for (int temp = 0; temp < nList.getLength(); temp++) {
				String n="";
				String d="";
				String s="";
				String sdt="";
				String et="";
				//String sd="";
				String u="";
				String l="";
				String c="";
				String ad="";
				Node nNode = nList.item(temp);
				//System.out.println("\nCurrent Element :" + nNode.getNodeName());
				
				if (nNode.getNodeType() == Node.ELEMENT_NODE) {
					
					Element eElement = (Element) nNode;
					n=eElement.getElementsByTagName("name").item(0).getTextContent();
					//the name field of the xml cointains both the name, and category, seperated by a &#124; , seperate the two and assign them to proper fields
					if(n.contains("&#124;")){
						String[] parts=n.split("\\&#124;");
						//set name to first part, category to second part, trim() removes extra white spaces
						n=parts[0].trim();
						c=parts[1].trim();	
					}
					//d=eElement.getElementsByTagName("description").item(0).getTextContent();
					s=eElement.getElementsByTagName("summary").item(0).getTextContent();
					sdt=eElement.getElementsByTagName("local-start-date-time").item(0).getTextContent();
					et=eElement.getElementsByTagName("local-end-time").item(0).getTextContent();
					//sd=eElement.getElementsByTagName("local-start-date").item(0).getTextContent();
					u=eElement.getElementsByTagName("url").item(0).getTextContent();
					
				}
				//the name and address of the event are burried a few levels deeper in the xml, this code gets to that
				Element eventElement= (Element) nList.item(temp);
				NodeList locationsList=eventElement.getElementsByTagName("locations");
				if(locationsList.getLength()>0){ //make sure locations field exists
					NodeList locationList=((Element)locationsList.item(0)).getElementsByTagName("location");
					if(locationList.getLength()>0){ //check if location field exists
						Node locNode=locationsList.item(0);
						Element locElem=(Element)locNode;
						l=locElem.getElementsByTagName("name").item(0).getTextContent();
						ad=locElem.getElementsByTagName("address1").item(0).getTextContent();
					}
				}
				eventList[temp]= new event(n,d,s,sdt,et,u,l,c,ad);
			}
		} 
		catch (Exception ex) {
		    ex.printStackTrace();
		}


		try{
			//creates writer which ouputs to json file
		    PrintWriter writer = new PrintWriter("eventsInfo.json", "UTF-8");
		    writer.println("{\n\"jsonEvents\":[");//first line of .json file
		    System.out.println("{\n\"jsonEvents\":[");//first line of .json file
		    for(int i=0; i<50; i++){
				locationClean(eventList[i]);
				quoteClean(eventList[i]);
				if(i==49){//if its the last event, aka dont put , after }
					//print to screen for easy reading, no impact on file
					System.out.print("{");
					System.out.print(eventPrint(eventList[i]));
					System.out.println("}");
					//write to file
					writer.print("{");
					writer.print(eventPrint(eventList[i]));
					writer.println("}");
				}
				else {//all other events, has comma after 
					//print to screen for easy reading, no impact on file
					System.out.print("{");
					System.out.print(eventPrint(eventList[i]));
					System.out.println("},");
					//writes to file
					writer.print("{");
					writer.print(eventPrint(eventList[i]));
					writer.println("},");
				}
			}
		    //last bits of formating for json file
		    writer.print("]\n}");
		    System.out.print("]\n}");
		    writer.close();
		} catch (Exception e) {
		   exit(1);
		}
		
	}

	private static void exit(int i) {
		// TODO Auto-generated method stub
		
	}

}
