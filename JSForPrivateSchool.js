/* Home Page and general values Starts */
/* Home Page Section Ends */

/* Courses Page Section Start */

function addCourses() {
  document.getElementById("POPUP_addCourses").style.display = "block";
  document.getElementById("maskSectionA").style.display = "block";
}

function seeCourses() {
  document.getElementById("POPUP_seeCourses").style.display = "block";
  document.getElementById("maskSectionB").style.display = "block";
}

function POPUP_addCourses_QuitSection() {
  document.getElementById("POPUP_addCourses").style.display = "none";
  document.getElementById("maskSectionA").style.display = "none";
}

function POPUP_seeCourses_QuitSection() {
  document.getElementById("POPUP_seeCourses").style.display = "none";
  document.getElementById("maskSectionB").style.display = "none";
}

// Block of code that will be creating new Divs when there is new input keeping stable my desing
function CreateCourse() {

  var title = document.getElementById("ipnutTitle").value;
  var stream = document.getElementById("inputStream").value;
  var type = document.getElementById("inputType").value;
  var startDate = document.getElementById("inputStartDate").value;
  var endDate = document.getElementById("inputEndDate").value;

  var courseCreated = {
    C_Title: title,
    C_Stream: stream,
    C_Type: type,
    C_StartDate: startDate,
    C_EndDate: endDate
  };

  var CheckCourseDiv = document.createElement("DIV");
  CheckCourseDiv.id = "checkCourse1";
  CheckCourseDiv.className = "checkCourse";
  
  var courseTtitleP = document.createElement("P");
  var courseStreamP = document.createElement("P");
  var courseTypeP = document.createElement("P");
  var courseStartDateP = document.createElement("P");
  var courseEndDateP = document.createElement("P");

  courseTtitleP.className = "CoursesData";
  courseStreamP.className = "CoursesData";
  courseTypeP.className = "CoursesData";
  courseStartDateP.className = "CoursesData";
  courseEndDateP.className = "CoursesData";

  var CheckCoursesDataTable1 = document.createTextNode("Course title: " + courseCreated.C_Title);
  var CheckCoursesDataTable2 = document.createTextNode("Stream: " + courseCreated.C_Stream);
  var CheckCoursesDataTable3 = document.createTextNode("Type: " + courseCreated.C_Type);
  var CheckCoursesDataTable4 = document.createTextNode("Starting Date: " + courseCreated.C_StartDate);
  var CheckCoursesDataTable5 = document.createTextNode("Ending Date: " + courseCreated.C_EndDate);

  courseTtitleP.appendChild(CheckCoursesDataTable1);
  courseStreamP.appendChild(CheckCoursesDataTable2);
  courseTypeP.appendChild(CheckCoursesDataTable3);
  courseStartDateP.appendChild(CheckCoursesDataTable4);
  courseEndDateP.appendChild(CheckCoursesDataTable5);

  CheckCourseDiv.appendChild(courseTtitleP);
  CheckCourseDiv.appendChild(courseStreamP);
  CheckCourseDiv.appendChild(courseTypeP);
  CheckCourseDiv.appendChild(courseStartDateP);
  CheckCourseDiv.appendChild(courseEndDateP);
  
  document.getElementById("coursesList").appendChild(CheckCourseDiv);
}

// Course Object and Displaying in the see Courses Section Block of Code jsut for Showcase
// Please Use the Above Method to create new instances and see how it works (it works amazingly well);
var course = {
  C_Title: "BC9",
  C_Stream: "C#",
  C_Type: "Part-Time",
  C_StartDate: "7/9/2019",
  C_EndDate: "26/4/2020"
};

var title = document.getElementById("C_TitleID");
var stream = document.getElementById("C_StreamID");
var type = document.getElementById("C_TypeID");
var startDate = document.getElementById("C_StartDateID");
var endDate = document.getElementById("C_EndDateID");

title.innerHTML = "Course title: " + course.C_Title;
stream.innerHTML = "Stream: " + course.C_Stream;
type.innerHTML = "Type: " + course.C_Type;
startDate.innerHTML = "Starting Date: " + course.C_StartDate;
endDate.innerHTML = "Ending Date: " + course.C_EndDate;

/* Courses Page Section Ends */

/* Students Page Section Start */

function AddStudents() {
  document.getElementById("POPUP_addStudents").style.display = "block";
  document.getElementById("maskSectionA").style.display = "block";
}

function SeeStudents() {
  document.getElementById("POPUP_seeStudents").style.display = "block";
  document.getElementById("maskSectionB").style.display = "block";
}

function EnrollStudents() {
  document.getElementById("POPUP_enrollStudents").style.display = "block";
  document.getElementById("maskSectionC").style.display = "block";
}

function CheckStudentsPerCourse() {
  document.getElementById("POPUP_checkStudentsPerCourse").style.display =
    "block";
  document.getElementById("maskSectionD").style.display = "block";
}

function CheckStudentsMoreThanOneCourses() {
  document.getElementById(
    "POPUP_checkStudentsMoreThanOneCourses"
  ).style.display = "block";
  document.getElementById("maskSectionE").style.display = "block";
}

function POPUP_addStudents_QuitSection() {
  document.getElementById("POPUP_addStudents").style.display = "none";
  document.getElementById("maskSectionA").style.display = "none";
}

function POPUP_seeStudents_QuitSection() {
  document.getElementById("POPUP_seeStudents").style.display = "none";
  document.getElementById("maskSectionB").style.display = "none";
}

function POPUP_enrollStudents_QuitSection() {
  document.getElementById("POPUP_enrollStudents").style.display = "none";
  document.getElementById("maskSectionC").style.display = "none";
}

function POPUP_checkStudentsPerCourse_QuitSection() {
  document.getElementById("POPUP_checkStudentsPerCourse").style.display =
    "none";
  document.getElementById("maskSectionD").style.display = "none";
}

function POPUP_checkStudentsMoreThanOneCourses_QuitSection() {
  document.getElementById(
    "POPUP_checkStudentsMoreThanOneCourses"
  ).style.display = "none";
  document.getElementById("maskSectionE").style.display = "none";
}

/* Students Page Section Ends */

/* Trainers Page Section Start */

function AddTrainer() {
  document.getElementById("POPUP_addTrainers").style.display = "block";
  document.getElementById("maskSectionA").style.display = "block";
}

function SeeTrainers() {
  document.getElementById("POPUP_seeTrainers").style.display = "block";
  document.getElementById("maskSectionB").style.display = "block";
}

function EnrollTrainers() {
  document.getElementById("POPUP_enrollTrainers").style.display = "block";
  document.getElementById("maskSectionC").style.display = "block";
}

function CheckTrainersPerCourse() {
  document.getElementById("POPUP_checkTrainersPerCourse").style.display =
    "block";
  document.getElementById("maskSectionD").style.display = "block";
}

function PutMarks() {
  document.getElementById("POPUP_putMarks").style.display = "block";
  document.getElementById("maskSectionE").style.display = "block";
}

function POPUP_addTrainers_QuitSection() {
  document.getElementById("POPUP_addTrainers").style.display = "none";
  document.getElementById("maskSectionA").style.display = "none";
}

function POPUP_seeTrainers_QuitSection() {
  document.getElementById("POPUP_seeTrainers").style.display = "none";
  document.getElementById("maskSectionB").style.display = "none";
}

function POPUP_enrollTrainers_QuitSection() {
  document.getElementById("POPUP_enrollTrainers").style.display = "none";
  document.getElementById("maskSectionC").style.display = "none";
}

function POPUP_checkTrainersPerCourse_QuitSection() {
  document.getElementById("POPUP_checkTrainersPerCourse").style.display =
    "none";
  document.getElementById("maskSectionD").style.display = "none";
}

function POPUP_putMarks_QuitSection() {
  document.getElementById("POPUP_putMarks").style.display = "none";
  document.getElementById("maskSectionE").style.display = "none";
}

/* Trainers Page Section Ends */

/* Assignments Page Section Starts */

function AddAssignments() {
  document.getElementById("POPUP_addAssignments").style.display = "block";
  document.getElementById("maskSectionA").style.display = "block";
}

function SeeAssignments() {
  document.getElementById("POPUP_seeAssignments").style.display = "block";
  document.getElementById("maskSectionB").style.display = "block";
}

function EnrollAssignmnets() {
  document.getElementById("POPUP_enrollAssignmnets").style.display = "block";
  document.getElementById("maskSectionC").style.display = "block";
}

function CheckAssignmnetPerCourse() {
  document.getElementById("POPUP_checkAssignmnetPerCourse").style.display =
    "block";
  document.getElementById("maskSectionD").style.display = "block";
}

function EnrollAssignmentsToStudents() {
  document.getElementById("POPUP_enrollAssignmentsToStudents").style.display =
    "block";
  document.getElementById("maskSectionE").style.display = "block";
}

function CheckAssignmentsPerStudentPerCourse() {
  document.getElementById(
    "POPUP_checkAssignmentsPerStudentPerCourse"
  ).style.display = "block";
  document.getElementById("maskSectionF").style.display = "block";
}

function POPUP_addAssignments_QuitSection() {
  document.getElementById("POPUP_addAssignments").style.display = "none";
  document.getElementById("maskSectionA").style.display = "none";
}

function POPUP_seeAssignments_QuitSection() {
  document.getElementById("POPUP_seeAssignments").style.display = "none";
  document.getElementById("maskSectionB").style.display = "none";
}

function POPUP_enrollAssignmnets_QuitSection() {
  document.getElementById("POPUP_enrollAssignmnets").style.display = "none";
  document.getElementById("maskSectionC").style.display = "none";
}

function POPUP_checkAssignmnetPerCourse_QuitSection() {
  document.getElementById("POPUP_checkAssignmnetPerCourse").style.display =
    "none";
  document.getElementById("maskSectionD").style.display = "none";
}

function POPUP_enrollAssignmentsToStudents_QuitSection() {
  document.getElementById("POPUP_enrollAssignmentsToStudents").style.display =
    "none";
  document.getElementById("maskSectionE").style.display = "none";
}

function POPUP_checkAssignmentsPerStudentPerCourse_QuitSection() {
  document.getElementById(
    "POPUP_checkAssignmentsPerStudentPerCourse"
  ).style.display = "none";
  document.getElementById("maskSectionF").style.display = "none";
}

/* Assignments Page Section Ends */
