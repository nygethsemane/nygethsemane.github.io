function enable_os_theme()
{
	var element = document.body;
	sessionStorage.clear();
	element.classList.remove("light");
	element.classList.remove("dark");
}

function enable_light_theme()
{
	var element = document.body;
	sessionStorage.clear();
	sessionStorage.setItem("current-color-scheme", "0");
	element.classList.remove("dark");
	element.classList.add("light");
}

function enable_dark_theme()
{
	var element = document.body;
	sessionStorage.clear();
	sessionStorage.setItem("current-color-scheme", "1");
	element.classList.remove("light");
	element.classList.add("dark");
}

if (sessionStorage.getItem("current-color-scheme") === "0") {
	enable_light_theme();
} else if (sessionStorage.getItem("current-color-scheme") === "1") {
	enable_dark_theme();
}
