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
    out += "<li><a href='http://github.com/smenon18' class='navbar-brand'>smenon18</a></li>"; //Brand
    out += "<li><a href='index.html'><div class='glyphicon glyphicon-home'></div>Home</a></li>"; //Index Link
    out += "<li><a href='projects.html'><div class='glyphicon glyphicon-file'></div>Projects</a></li>"; //Projects Link
    out += "<li><a href='about.html'><div class='glyphicon glyphicon-user'></div>About Me</a></li>"; //About Link
    out += "</ul>"; //End Content
    out += "</div></div></nav>"; //End navbar
    document.getElementById('navbar-placeholder').innerHTML = out;
 }