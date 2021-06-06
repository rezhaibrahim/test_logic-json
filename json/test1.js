const data = [
    {
      "inventory_id": 9382,
      "name": "Brown Chair",
      "type": "furniture",
      "tags": [
        "chair",
        "furniture",
        "brown"
      ],
      "purchased_at": 1579190471,
      "placement": {
        "room_id": 3,
        "name": "Meeting Room"
      }
    },
    {
      "inventory_id": 9380,
      "name": "Big Desk",
      "type": "furniture",
      "tags": [
        "desk",
        "furniture",
        "brown"
      ],
      "purchased_at": 1579190642,
      "placement": {
        "room_id": 3,
        "name": "Meeting Room"
      }
    },
    {
      "inventory_id": 2932,
      "name": "LG Monitor 50 inch",
      "type": "electronic",
      "tags": [
        "monitor"
      ],
      "purchased_at": 1579017842,
      "placement": {
        "room_id": 3,
        "name": "Lavender"
      }
    },
    {
      "inventory_id": 232,
      "name": "Sharp Pendingin Ruangan 2PK",
      "type": "electronic",
      "tags": [
        "ac"
      ],
      "purchased_at": 1578931442,
      "placement": {
        "room_id": 5,
        "name": "Dhanapala"
      }
    },
    {
      "inventory_id": 9382,
      "name": "Alat Makan",
      "type": "tableware",
      "tags": [
        "spoon",
        "fork",
        "tableware"
      ],
      "purchased_at": 1578672242,
      "placement": {
        "room_id": 10,
        "name": "Rajawali"
      }
    }
  ]

//   console.log(data);
// 1. Find items in the Meeting Room.

const result1 = data.filter(words => words.placement.name == 'Meeting Room') 
console.log("no 1.",result1);


// 2. Find all electronic devices.
console.log("no.2");
const result2 = data.map(x=> {
    console.log("electronic devices");
    x.tags.map(y => console.log('=>',y))
})
// 3. Find all the furniture.
const result3 = data.filter(words => words.type == 'furniture')
console.log("no 3",result3); 
// 4. Find all items were purchased on 16 Januari 2020.
const result4 = data.filter(x => 
    x.purchased_at == "1579190471" || x.purchased_at == "1579190642"
)
console.log("no 4", result4); 

// 5. Find all items with brown color.
const result5 = data.filter(x=> 
    x.tags[2] == "brown"
)
console.log("no 5",result5)  