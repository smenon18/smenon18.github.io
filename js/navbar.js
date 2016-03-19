/*
 * @author Shaan Menon
 * @date 16th Marh 2016
 *
 * This file is to load the navbar onto every page, preventing the necesity of writing
 * it multiple times
 */
 
this.onload = function(){
    var out = "<nav class='navbar navbar-inverse'>"; //Begin navbar
    out += "<div class='container'><div class='navbar-header'>";
    out += "<ul class='nav navbar-nav'>"; //Begin Content
    out += "<li><a href='http://github.com/smenon18' class='navbar-brand'>Shaan Menon</a></li>"; //Brand
    out += "<li><a href='index.html'><div class='glyphicon glyphicon-home'></div>Home</a></li>"; //Index Link
    out += "<li class='dropdown'><a href='#' class='dropdown-toggle' data-toggle='dropdown' role='button' aria-haspopup='true' aria-expanded='false'>Projects<span class='caret'></span></a><ul class='dropdown-menu'><li><a href='projects.html#SoftwareEngineering'>Software Engineering</a></li><li><a href='projects.html#dotFiles'>dot Files</a></li><li><a href='projects.html#githubio'>smenon18.github.io</a></li></ul></li>"; //Projects Links
    out += "<li><a href='about.html'><div class='glyphicon glyphicon-user'></div>About Me</a></li>"; //About Link
    out += "</ul>"; //End Content
    out += "</div></div></nav>"; //End navbar
    document.getElementById('navbar-placeholder').innerHTML = out;
}