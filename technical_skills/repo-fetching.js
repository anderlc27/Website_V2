var user = "anderlc27";

async function fetchRepositories() {
	var api_call = await fetch(`https://api.github.com/users/${user}/repos`);

	var data = await api_call.json();
	console.log(data);
	return {data}
}

function showData() {
	fetchRepositories().then((res) => {
		for (var i = 0; i < res.data.length; i++) {
			projectName = res.data[i].name;
			projectDescription = res.data[i].description;
			projectCreation = "";

			for (var j = 0; j < 10; j++) {
				projectCreation += res.data[i].created_at.charAt(j);
			}

			projects();
			document.getElementById("projects").appendChild(document.createElement("TR"));
		}
	})
}

function projects() {
	var project = "";

	for (var index = 0; index < projectName.length; index++) {
		(projectName.charAt(index) == '-') ? project += ' ' : 
		(projectName.charAt(index) == '_') ? project += ' ' :
		project += projectName.charAt(index);
	}
	var node = document.createElement("TD");
	var textnode = document.createTextNode(project);
	node.appendChild(textnode);
	document.getElementById("projects").appendChild(node);

	node = document.createElement("TD");
	textnode = document.createTextNode(projectCreation);
	node.appendChild(textnode);
	document.getElementById("projects").appendChild(node);

	node = document.createElement("TD");
	textnode = document.createTextNode(projectDescription);
	node.appendChild(textnode);
	document.getElementById("projects").appendChild(node);
}