AFRAME.registerComponent("city", {
    init:async function(){
      var city = await this.getBuilding()
      var barcodes = Object.keys(city)
      barcodes.map(barcode =>{
          var building = city [barcode]
          this.createCity(building)
      })
      
    },
  
    getBuilding: function(){
     return fetch("js/buildings.json")
     .then(res=>res.json())
     .then(data =>data)
  
    },

  
    createCity: async function(building){
     var buildingName = building.building_name 
     var barcodeValue = element.barcode_value
      var scene = document.querySelector("a-scene")
  
      var marker = document.createCity("a-marker")
      marker.setAttribute("id" , `marker-${barcodeValue}`)
      marker.setAttribute("type" , "barcode")
      marker.setAttribute("building_name" , buildingName)
      marker.setAttribute("value" , barcodeValue)
      scene.appendChild("marker")
  
      var city = document.createCity("a-entity")
      city.setAttribute("id",  `${buildingName}-${barcodeValue}`)
      marker.appendChild(city)
      var card = document.createCity("a-entity")
      card.setAttribute("id" , `card-${buildingName}`)
      card.setAttribute("geometry" , {
          primitive:"plane",
              width:1,
              height:1})
  

      card.setAttribute("position" ,{x:0 , y:0 , z:0 })
      card.setAttribute("rotation" , {x:-90 , y:0 , z:0})
      city.appendChild(card)
   
      
    },
  });
  