const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getContacts: () => (
				fetch(`https://playground.4geeks.com/contact/agendas/celiabernal/contacts`,{ 
				}
				)		
				.then(res => {
					if (!res.ok) {
						throw Error(res.statusText)
						getActions().createUser()
					};
					///
					return res.json();
				  })
				.then((data)=> {console.log(data);
					setStore({contacts:data.contacts})
				})
				.catch(error => console.error(error))
			),
			
			 createUser: () =>{
				fetch(`https://playground.4geeks.com/contact/agendas/celiabernal`,{ 
					method: 'POST',
				}
				)		
				.then(res => {
					if (!res.ok) throw Error(res.statusText);
					return res.text();
				  })
				.then(response => console.log('Success:', response))
				.catch(error => console.error(error));	
			},
			deleteContact: (id) =>{
				console.log(id)
				fetch(`https://playground.4geeks.com/contact/agendas/celiabernal/contacts/${id}`,{ 
					method: 'DELETE',
				}
			
				)		
				.then(res => {
					if (!res.ok) throw Error(res.statusText);
					return res.text();
				  })
				.then(response => {
					console.log('Success:', response)
					getActions().getContacts()
				})
				.catch(error => console.error(error));	
			 },

			newContact : (contact) =>{ 
				fetch(`https://playground.4geeks.com/contact/agendas/celiabernal/contacts`,{ 
					method: 'POST',
					body: JSON.stringify(({ 
						name: contact.name,
						phone: contact.phone,
						email: contact.email,
						address: contact.address
					  
					 })),
					 headers: {
						'Content-Type': 'application/json'
					  }}
					 
				)		
				.then(response => {
					if (!response.ok) throw Error(response.statusText);
					return response.json();
				  })
				.then(data => {
					console.log('Success:', data)
					getActions().getContacts()
				}
			)
				.catch(error => console.error(error));	
			},
			updateContact : (contact,id) =>{ 
				fetch(`https://playground.4geeks.com/contact/agendas/celiabernal/contacts/${id}`,{ 
					method: 'PUT',
					body: JSON.stringify(({ 
						name: contact.name,
						phone: contact.phone,
						email: contact.email,
						address: contact.address
					  
					 })),
					 headers: {
						'Content-Type': 'application/json'
					  }}
					 
				)		
				.then(res => {
					if (!res.ok) throw Error(res.statusText);
					return res.json();
				  })
				.then(response => {
					console.log('Success:', response)
					getActions().getContacts()

				})
				.catch(error => console.error(error));	
			}
		
		}
	};
};

export default getState;
