var input = {"0":
  [{"id": 10,
    "title": "House",
    "level": 0,
    "children": [],
    "parent_id": null
    }
  ],
 "1":
  [{"id": 12,
    "title": "Red Roof",
    "level": 1,
    "children": [],
    "parent_id": 10},
   {"id": 18,
    "title": "Blue Roof",
    "level": 1,
    "children": [],
    "parent_id": 10},
   {"id": 13,
    "title": "Wall",
    "level": 1,
    "children": [],
    "parent_id": 10}
  ],
 "2":
  [{"id": 17,
    "title": "Blue Window",
    "level": 2,
    "children": [],
    "parent_id": 12},
   {"id": 16,
    "title": "Door",
    "level": 2,
    "children": [],
    "parent_id": 13},
   {"id": 15,
    "title": "Red Window",
    "level": 2,
    "children": [],
    "parent_id": 12
    }
  ]
}

var outputJson = [];



function start(){
	input[0].forEach(node=>{
		outputJson.push(parse(node,0));
	})
	console.log(JSON.stringify(outputJson));
}

function parse( localinput , key ) {
	let temp =  { ...localinput, children : input[key + 1+''] ? input[key + 1].filter(value => value.parent_id === localinput.id) : []};
	if(temp.children.length){
		temp.children = temp.children.map(child=>{
			return { ...parse(child,key+1)}
		})
	}
	return temp;
}

start();
