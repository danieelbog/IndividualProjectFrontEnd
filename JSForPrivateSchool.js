/* Home Page and general values Starts */

// A function to save an create new divs when something is enrolled somewhere (not needed in this version)
function saveContent(num) {
  
}

// This function will clear the dropable space based uppon the html page it was called (it will clear everything form evrywhere)
function clearContent(num) {
  if (num === 1) {
    var y = document.getElementById("checkStudentDragableSpace");

    for (
      var i = 0;
      i < document.getElementsByClassName("checkStudentDragable").length;
      i++
    ) {
      var x = document.getElementsByClassName("checkStudentDragable")[i];
      y.appendChild(x);
    }
  } else if (num === 2) {
    var y = document.getElementById("checkTrainersDragableSpace");

    for (
      var i = 0;
      i < document.getElementsByClassName("checkTrainerDragable").length;
      i++
    ) {
      var x = document.getElementsByClassName("checkTrainerDragable")[i];
      y.appendChild(x);
    }
  } else if (num === 3) {
    var y = document.getElementById("checkAssignmentDragableSpace1");

    for (
      var i = 0;
      i < document.getElementsByClassName("checkAssignmentDragable").length;
      i++
    ) {
      var x = document.getElementsByClassName("checkAssignmentDragable")[i];
      y.appendChild(x);
    }
  }
  else if (num === 4) {
    var y = document.getElementById("checkAssignmentToStudentDragableSpace1");

    for (
      var i = 0;
      i < document.getElementsByClassName("checkAssignmentToStudentDrugable").length;
      i++
    ) {
      var x = document.getElementsByClassName("checkAssignmentToStudentDrugable")[i];
      y.appendChild(x);
    }
  }
}

// general onload function to print the data needed at the html pages
function onloadDisplayData(num) {
  // Num 1 is Student
  if (num === 1) {
    CheckStudentData();
  }
  // Num 2 is Trainer
  else if (num === 2) {
    CheckTrainersData();    
  }
  // Num 3 is Assignment
  else if (num === 3) {
    CheckAssignmentsData();
  }
  // Num 4 or Else is Courses
  else {
    CheckCoursesData();
  }
}

/* Home Page Section Ends */

/* Courses Page Section Start */

// Slide page to add Courses
function addCourses() {
  document.getElementById("POPUP_addCourses").style.display = "block";
  document.getElementById("maskSectionA").style.display = "block";
}

// Slide page to check Courses
function seeCourses() {
  document.getElementById("POPUP_seeCourses").style.display = "block";
  document.getElementById("maskSectionB").style.display = "block";
}

// Slide page to quit add Courses
function POPUP_addCourses_QuitSection() {
  document.getElementById("POPUP_addCourses").style.display = "none";
  document.getElementById("maskSectionA").style.display = "none";
}

// Slide page to quit check Courses
function POPUP_seeCourses_QuitSection() {
  document.getElementById("POPUP_seeCourses").style.display = "none";
  document.getElementById("maskSectionB").style.display = "none";
}

// Block of code that will be creating new Divs when there is new input keeping stable my desing
function CreateCourse() {
  // Taking valiues from inputs forms and initializing values for usage in the algorithm
  var title = document.getElementById("ipnutTitle").value;
  var stream = document.getElementById("inputStream").value;
  var type = document.getElementById("inputType").value;
  var startDate = document.getElementById("inputStartDate").value;
  var endDate = document.getElementById("inputEndDate").value;

  // Creating the Object of the Student
  var courseCreated = {
    C_Title: title,
    C_Stream: stream,
    C_Type: type,
    C_StartDate: startDate,
    C_EndDate: endDate
  };

  // Creating the Div that will have the instance info and giving it corresponed Class and ID
  var CheckCourseDiv = document.createElement("DIV");
  CheckCourseDiv.id = "checkCourse1";
  CheckCourseDiv.className = "checkCourse";

  // Creating the div at studentHtml so we can use the add student to course function
  var DataContainerCourseDiv = document.createElement("DIV");
  DataContainerCourseDiv.className = "datacontainerstudent";

  // Creating the div at studentHtml so we can use the add student to course function
  var CheckCourseDragableDiv = document.createElement("DIV");
  CheckCourseDragableDiv.id = "checkCourseDragable1";
  CheckCourseDragableDiv.className = "checkCourseDragable";

  // Creating the paragraphs that will have the indo written isnide the div of the instance
  var courseTtitleP = document.createElement("P");
  var courseStreamP = document.createElement("P");
  var courseTypeP = document.createElement("P");
  var courseStartDateP = document.createElement("P");
  var courseEndDateP = document.createElement("P");

  // Giving class names to the variables created
  courseTtitleP.className = "CoursesData";
  courseStreamP.className = "CoursesData";
  courseTypeP.className = "CoursesData";
  courseStartDateP.className = "CoursesData";
  courseEndDateP.className = "CoursesData";

  // Creating Text nodes so they can be added to the paragraphs xreated erlier
  var CheckCoursesDataTable1 = document.createTextNode(
    "Course title: " + courseCreated.C_Title
  );
  var CheckCoursesDataTable2 = document.createTextNode(
    "Stream: " + courseCreated.C_Stream
  );
  var CheckCoursesDataTable3 = document.createTextNode(
    "Type: " + courseCreated.C_Type
  );
  var CheckCoursesDataTable4 = document.createTextNode(
    "Starting Date: " + courseCreated.C_StartDate
  );
  var CheckCoursesDataTable5 = document.createTextNode(
    "Ending Date: " + courseCreated.C_EndDate
  );

  // Adding the text created variables tto the Paragraphs inside the div of the instance
  courseTtitleP.appendChild(CheckCoursesDataTable1);
  courseStreamP.appendChild(CheckCoursesDataTable2);
  courseTypeP.appendChild(CheckCoursesDataTable3);
  courseStartDateP.appendChild(CheckCoursesDataTable4);
  courseEndDateP.appendChild(CheckCoursesDataTable5);

  // Adding texts to the div of the instance
  CheckCourseDiv.appendChild(courseTtitleP);
  CheckCourseDiv.appendChild(courseStreamP);
  CheckCourseDiv.appendChild(courseTypeP);
  CheckCourseDiv.appendChild(courseStartDateP);
  CheckCourseDiv.appendChild(courseEndDateP);

  // Adding the div to the COntainer with all the other instance divs
  document.getElementById("coursesList").appendChild(CheckCourseDiv);
  // Add courses to Student Html so we can add students to courses
  DataContainerCourseDiv.appendChild(CheckCourseDragableDiv);
  document
    .getElementById("coursesListToDrug")
    .appendChild(DataContainerCourseDiv);
  // Add courses to Trainer Html so we can add Trainers to Courses
  // Add courses to Assignments Html so we can add Assignments to Courses
}

// Course Object and Displaying in the see Courses Section Block of Code jsut for Showcase
// Please Use the Above Method to create new instances and see how it works (it works amazingly well);
function CheckCoursesData() {
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
}
/* Courses Page Section Ends */

/* Students Page Section Start */

// Slide page for Add Student
function AddStudents() {
  document.getElementById("POPUP_addStudents").style.display = "block";
  document.getElementById("maskSectionA").style.display = "block";
}

// Slide page for Check Student
function SeeStudents() {
  document.getElementById("POPUP_seeStudents").style.display = "block";
  document.getElementById("maskSectionB").style.display = "block";
}

// Slide page for Enroll Student
function EnrollStudents() {
  document.getElementById("POPUP_enrollStudents").style.display = "block";
  document.getElementById("maskSectionC").style.display = "block";
}

// Dragable Content for Students Block of Code
function allowDropCS(ev) {
  ev.preventDefault();
}

function dragCS(ev) {
  ev.dataTransfer.setData("div", ev.target.id);
}

function dropCS(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("div");
  ev.target.appendChild(document.getElementById(data));
}

// Drop down for dragable divs
function OpencheckCourseDragableSpace(num) {
  // Numbers are for dropable divs, its just for show how it will be working with more entities later
  if (num == 1) {
    var checkCourseDragableSpace1 = document.getElementById(
      "checkCourseDragableSpace1"
    );
    var saveTheEnrollID1 = document.getElementById("SaveTheEnrollID1");
    var clearTheEnrollID1 = document.getElementById("ClearTheEnrollID1");

    if (checkCourseDragableSpace1.style.display === "block") {
      checkCourseDragableSpace1.style.display = "none";
      saveTheEnrollID1.style.display = "none";
      clearTheEnrollID1.style.display = "none";
    } else {
      checkCourseDragableSpace1.style.display = "block";
      saveTheEnrollID1.style.display = "block";
      clearTheEnrollID1.style.display = "block";
    }
  } else if (num == 2) {
    var checkCourseDragableSpace2 = document.getElementById(
      "checkCourseDragableSpace2"
    );
    var saveTheEnrollID2 = document.getElementById("SaveTheEnrollID2");
    var clearTheEnrollID2 = document.getElementById("ClearTheEnrollID2");

    if (checkCourseDragableSpace2.style.display === "block") {
      checkCourseDragableSpace2.style.display = "none";
      saveTheEnrollID2.style.display = "none";
      clearTheEnrollID2.style.display = "none";
    } else {
      checkCourseDragableSpace2.style.display = "block";
      saveTheEnrollID2.style.display = "block";
      clearTheEnrollID2.style.display = "block";
    }
  } else if (num == 3) {
    var checkCourseDragableSpace3 = document.getElementById(
      "checkCourseDragableSpace3"
    );
    var saveTheEnrollID3 = document.getElementById("SaveTheEnrollID3");
    var clearTheEnrollID3 = document.getElementById("ClearTheEnrollID3");

    if (checkCourseDragableSpace3.style.display === "block") {
      checkCourseDragableSpace3.style.display = "none";
      saveTheEnrollID3.style.display = "none";
      clearTheEnrollID3.style.display = "none";
    } else {
      checkCourseDragableSpace3.style.display = "block";
      saveTheEnrollID3.style.display = "block";
      clearTheEnrollID3.style.display = "block";
    }
  } else if (num == 4) {
    var checkCourseDragableSpace4 = document.getElementById(
      "checkCourseDragableSpace4"
    );
    var saveTheEnrollID4 = document.getElementById("SaveTheEnrollID4");
    var clearTheEnrollID4 = document.getElementById("ClearTheEnrollID4");

    if (checkCourseDragableSpace4.style.display === "block") {
      checkCourseDragableSpace4.style.display = "none";
      saveTheEnrollID4.style.display = "none";
      clearTheEnrollID4.style.display = "none";
    } else {
      checkCourseDragableSpace4.style.display = "block";
      saveTheEnrollID4.style.display = "block";
      clearTheEnrollID4.style.display = "block";
    }
  } else if (num == 5) {
    var checkCourseDragableSpace5 = document.getElementById(
      "checkCourseDragableSpace5"
    );
    var saveTheEnrollID5 = document.getElementById("SaveTheEnrollID5");
    var clearTheEnrollID5 = document.getElementById("ClearTheEnrollID5");

    if (checkCourseDragableSpace5.style.display === "block") {
      checkCourseDragableSpace5.style.display = "none";
      saveTheEnrollID5.style.display = "none";
      clearTheEnrollID5.style.display = "none";
    } else {
      checkCourseDragableSpace5.style.display = "block";
      saveTheEnrollID5.style.display = "block";
      clearTheEnrollID5.style.display = "block";
    }
  } else if (num == 6) {
    var checkCourseDragableSpace6 = document.getElementById(
      "checkCourseDragableSpace6"
    );
    var saveTheEnrollID6 = document.getElementById("SaveTheEnrollID6");
    var clearTheEnrollID6 = document.getElementById("ClearTheEnrollID6");

    if (checkCourseDragableSpace6.style.display === "block") {
      checkCourseDragableSpace6.style.display = "none";
      saveTheEnrollID6.style.display = "none";
      clearTheEnrollID6.style.display = "none";
    } else {
      checkCourseDragableSpace6.style.display = "block";
      saveTheEnrollID6.style.display = "block";
      clearTheEnrollID6.style.display = "block";
    }
  }  
}

// Check Students Per COurse Section
function CheckStudentsPerCourse() {
  document.getElementById("POPUP_checkStudentsPerCourse").style.display =
    "block";
  document.getElementById("maskSectionD").style.display = "block";
}

// Function to drop down the space with the students enrolled in the courses
function OpencheckStudentsPerCourse(num) {

  var checkStudentsPerCourseSpace1 = document.getElementById("checkStudentsPerCourseSpace1");
  var checkStudentsPerCourseSpace2 = document.getElementById("checkStudentsPerCourseSpace2");

  if (num == 1) {
    if (checkStudentsPerCourseSpace1.style.display == "block") {
      checkStudentsPerCourseSpace1.style.display = "none";
    }
    else {
      checkStudentsPerCourseSpace1.style.display = "block";
    }
  }
  else if (num == 2) {
    if (checkStudentsPerCourseSpace2.style.display == "block") {
      checkStudentsPerCourseSpace2.style.display = "none";
    }
    else {
      checkStudentsPerCourseSpace2.style.display = "block";
    }
  }
}

// Check Students in more than once Courses
function CheckStudentsMoreThanOneCourses() {
  document.getElementById(
    "POPUP_checkStudentsMoreThanOneCourses"
  ).style.display = "block";
  document.getElementById("maskSectionE").style.display = "block";
}

function OpencheckStudentsMoreThanOne(num) {

  var checkStudentsMoreThanOneSpace1 = document.getElementById("checkStudentsMoreThanOneSpace1");
  var checkStudentsMoreThanOneSpace2 = document.getElementById("checkStudentsMoreThanOneSpace2");

  if (num == 1) {
    if (checkStudentsMoreThanOneSpace1.style.display == "block") {
      checkStudentsMoreThanOneSpace1.style.display = "none";
    }
    else {
      checkStudentsMoreThanOneSpace1.style.display = "block";
    }
  }
  else if (num == 2) {
    if (checkStudentsMoreThanOneSpace2.style.display == "block") {
      checkStudentsMoreThanOneSpace2.style.display = "none";
    }
    else {
      checkStudentsMoreThanOneSpace2.style.display = "block";
    }
  }
}

// Add students to Courses Quit Section
function POPUP_addStudents_QuitSection() {
  document.getElementById("POPUP_addStudents").style.display = "none";
  document.getElementById("maskSectionA").style.display = "none";
}

// Add students to Courses Quit Section
function POPUP_seeStudents_QuitSection() {
  document.getElementById("POPUP_seeStudents").style.display = "none";
  document.getElementById("maskSectionB").style.display = "none";
}

// Enroll Students to Courses Quit Section
function POPUP_enrollStudents_QuitSection() {
  document.getElementById("POPUP_enrollStudents").style.display = "none";
  document.getElementById("maskSectionC").style.display = "none";
}

// Check student per course Quit Section
function POPUP_checkStudentsPerCourse_QuitSection() {
  document.getElementById("POPUP_checkStudentsPerCourse").style.display =
    "none";
  document.getElementById("maskSectionD").style.display = "none";
}

// Check students in ore than one courses Quit Section
function POPUP_checkStudentsMoreThanOneCourses_QuitSection() {
  document.getElementById(
    "POPUP_checkStudentsMoreThanOneCourses"
  ).style.display = "none";
  document.getElementById("maskSectionE").style.display = "none";
}

function OpenMe() {
  var lola = document.getElementById("Tanasakis");

  if (lola.style.display == "block") {
    lola.style.display = "none";

  }
  else {
    lola.style.display = "block";
  }
}

// Block of code that will be creating new Divs when there is new input keeping stable my desing
function CreateStudent() {
  // Taking valiues from inputs forms and initializing values for usage in the algorithm
  var s_firstName = document.getElementById("inputSFirstName").value;
  var s_lastName = document.getElementById("inputSLastName").value;
  var s_birthday = document.getElementById("inputSBirthday").value;
  var s_fees = document.getElementById("inputSFees").value;

  // Creating the Object of the Student
  var studentCreated = {
    S_FirstName: s_firstName,
    S_LastName: s_lastName,
    S_BirthDay: s_birthday,
    S_Fees: s_fees
  };

  // Creating the Div that will have the instance info and giving it corresponed Class and ID
  var CheckStudentDiv = document.createElement("DIV");
  CheckStudentDiv.id = "checkStudent1";
  CheckStudentDiv.className = "checkStudent";

  // Creating the paragraphs that will have the indo written isnide the div of the instance
  var s_firstNameP = document.createElement("P");
  var s_lastNameP = document.createElement("P");
  var s_birthdayP = document.createElement("P");
  var s_feesP = document.createElement("P");

  // Giving class names to the variables created
  s_firstNameP.className = "StudentsData";
  s_lastNameP.className = "StudentsData";
  s_birthdayP.className = "StudentsData";
  s_feesP.className = "StudentsData";

  // Creating Text nodes so they can be added to the paragraphs xreated erlier
  var CheckStudentDataTable1 = document.createTextNode(
    "First Name: " + studentCreated.S_FirstName
  );
  var CheckStudentDataTable2 = document.createTextNode(
    "Last Name: " + studentCreated.S_LastName
  );
  var CheckStudentDataTable3 = document.createTextNode(
    "Date of Birth: " + studentCreated.S_BirthDay
  );
  var CheckStudentDataTable4 = document.createTextNode(
    "Fees: " + studentCreated.S_Fees
  );

  // Adding the text created variables tto the Paragraphs inside the div of the instance
  s_firstNameP.appendChild(CheckStudentDataTable1);
  s_lastNameP.appendChild(CheckStudentDataTable2);
  s_birthdayP.appendChild(CheckStudentDataTable3);
  s_feesP.appendChild(CheckStudentDataTable4);

  // Adding texts to the div of the instance
  CheckStudentDiv.appendChild(s_firstNameP);
  CheckStudentDiv.appendChild(s_lastNameP);
  CheckStudentDiv.appendChild(s_birthdayP);
  CheckStudentDiv.appendChild(s_feesP);

  // Adding the div to the COntainer with all the other instance divs
  document.getElementById("studentsList").appendChild(CheckStudentDiv);
}

// Course Object and Displaying in the see Courses Section Block of Code jsut for Showcase
// Please Use the Above Method to create new instances and see how it works (it works amazingly well);
function CheckStudentData() {
  var student = {
    S_FirstName: "Daniel",
    S_LastName: "Bogdan",
    S_BirthDay: "26/4/1995",
    S_Fees: "1980 euros"
  };

  // Section for Check Students in Private School
  var sfn = document.getElementById("S_FirstNameID");
  var sln = document.getElementById("S_LastNameID");
  var sdob = document.getElementById("S_DateOfBirthID");
  var sf = document.getElementById("S_FeesID");

  sfn.innerHTML = "First Name: " + student.S_FirstName;
  sln.innerHTML = "Last Name: " + student.S_LastName;
  sdob.innerHTML = "Date of Birth: " + student.S_BirthDay;
  sf.innerHTML = "Fees: " + student.S_Fees;

  // Section for Enroll Students to Course
  var sfn1 = document.getElementById("S_FirstNameID11");
  var sln1 = document.getElementById("S_LastNameID11");
  var sdob1 = document.getElementById("S_DateOfBirthID11");
  var sf1 = document.getElementById("S_FeesID11");

  sfn1.innerHTML = "First Name: " + student.S_FirstName;
  sln1.innerHTML = "Last Name: " + student.S_LastName;
  sdob1.innerHTML = "Date of Birth: " + student.S_BirthDay;
  sf1.innerHTML = "Fees: " + student.S_Fees;

  var course = {
    C_Title: "BC9",
    C_Stream: "C#",
    C_Type: "Part-Time",
    C_StartDate: "7/9/2019",
    C_EndDate: "26/4/2020"
  };

  var title1 = document.getElementById("C_TitleID11");
  var stream1 = document.getElementById("C_StreamID11");
  var type1 = document.getElementById("C_TypeID11");
  var startDate1 = document.getElementById("C_StartDateID11");
  var endDate1 = document.getElementById("C_EndDateID11");

  title1.innerHTML = "Course title: " + course.C_Title;
  stream1.innerHTML = "Stream: " + course.C_Stream;
  type1.innerHTML = "Type: " + course.C_Type;
  startDate1.innerHTML = "Starting Date: " + course.C_StartDate;
  endDate1.innerHTML = "Ending Date: " + course.C_EndDate;

  // Section for Check Students Per Courses
  var sfn1 = document.getElementById("S_FirstNameID17");
  var sln1 = document.getElementById("S_LastNameID17");
  var sdob1 = document.getElementById("S_DateOfBirthID17");
  var sf1 = document.getElementById("S_FeesID17");

  sfn1.innerHTML = "First Name: " + student.S_FirstName;
  sln1.innerHTML = "Last Name: " + student.S_LastName;
  sdob1.innerHTML = "Date of Birth: " + student.S_BirthDay;
  sf1.innerHTML = "Fees: " + student.S_Fees;

  var title2 = document.getElementById("C_TitleID17");
  var stream2 = document.getElementById("C_StreamID17");
  var type2 = document.getElementById("C_TypeID17");
  var startDate2 = document.getElementById("C_StartDateID17");
  var endDate2 = document.getElementById("C_EndDateID17");

  title2.innerHTML = "Course title: " + course.C_Title;
  stream2.innerHTML = "Stream: " + course.C_Stream;
  type2.innerHTML = "Type: " + course.C_Type;
  startDate2.innerHTML = "Starting Date: " + course.C_StartDate;
  endDate2.innerHTML = "Ending Date: " + course.C_EndDate;

  // Section for Check students in more than one Courses
  var sfn13 = document.getElementById("S_FirstNameID113");
  var sln13 = document.getElementById("S_LastNameID113");
  var sdob13 = document.getElementById("S_DateOfBirthID113");
  var sf13 = document.getElementById("S_FeesID113");

  sfn13.innerHTML = "First Name: " + student.S_FirstName;
  sln13.innerHTML = "Last Name: " + student.S_LastName;
  sdob13.innerHTML = "Date of Birth: " + student.S_BirthDay;
  sf13.innerHTML = "Fees: " + student.S_Fees;

  var title23 = document.getElementById("C_TitleID113");
  var stream23 = document.getElementById("C_StreamID113");
  var type23 = document.getElementById("C_TypeID113");
  var startDate23 = document.getElementById("C_StartDateID113");
  var endDate23 = document.getElementById("C_EndDateID113");

  title23.innerHTML = "Course title: " + course.C_Title;
  stream23.innerHTML = "Stream: " + course.C_Stream;
  type23.innerHTML = "Type: " + course.C_Type;
  startDate23.innerHTML = "Starting Date: " + course.C_StartDate;
  endDate23.innerHTML = "Ending Date: " + course.C_EndDate;
}

/* Students Page Section Ends */

/* Trainers Page Section Start */

// Slide for Add Trainer
function AddTrainer() {
  document.getElementById("POPUP_addTrainers").style.display = "block";
  document.getElementById("maskSectionA").style.display = "block";
}

// Slide for Check Trainer
function SeeTrainers() {
  document.getElementById("POPUP_seeTrainers").style.display = "block";
  document.getElementById("maskSectionB").style.display = "block";
}

// Slide for Enroll Trainer
function EnrollTrainers() {
  document.getElementById("POPUP_enrollTrainers").style.display = "block";
  document.getElementById("maskSectionC").style.display = "block";
}

// Dragable Content for Students Block of Code
function allowDropCT(ev) {
  ev.preventDefault();
}

function dragCT(ev) {
  ev.dataTransfer.setData("div", ev.target.id);
}

function dropCT(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("div");
  ev.target.appendChild(document.getElementById(data));
}

// Drop down for dragable divs
function OpencheckCourseDragableSpaceCT(num) {
  // Numbers are for showcase purposes, for each div, later on this will be fully automatic
  if (num == 7) {
    var checkDragableSpace1 = document.getElementById(
      "checkCourseDragableSpace1CT"
    );
    var saveTheEnrollID1 = document.getElementById("SaveTheEnrollID1CT");
    var clearTheEnrollID1 = document.getElementById("ClearTheEnrollID1CT");

    if (checkDragableSpace1.style.display === "block") {
      checkDragableSpace1.style.display = "none";
      saveTheEnrollID1.style.display = "none";
      clearTheEnrollID1.style.display = "none";
    } else {
      checkDragableSpace1.style.display = "block";
      saveTheEnrollID1.style.display = "block";
      clearTheEnrollID1.style.display = "block";
    }
  } else if (num == 8) {
    var checkDragableSpace2 = document.getElementById(
      "checkCourseDragableSpace2CT"
    );
    var saveTheEnrollID2 = document.getElementById("SaveTheEnrollID2CT");
    var clearTheEnrollID2 = document.getElementById("ClearTheEnrollID2CT");

    if (checkDragableSpace2.style.display === "block") {
      checkDragableSpace2.style.display = "none";
      saveTheEnrollID2.style.display = "none";
      clearTheEnrollID2.style.display = "none";
    } else {
      checkDragableSpace2.style.display = "block";
      saveTheEnrollID2.style.display = "block";
      clearTheEnrollID2.style.display = "block";
    }
  } else if (num == 9) {
    var checkDragableSpace3 = document.getElementById(
      "checkCourseDragableSpace3CT"
    );
    var saveTheEnrollID3 = document.getElementById("SaveTheEnrollID3CT");
    var clearTheEnrollID3 = document.getElementById("ClearTheEnrollID3CT");

    if (checkDragableSpace3.style.display === "block") {
      checkDragableSpace3.style.display = "none";
      saveTheEnrollID3.style.display = "none";
      clearTheEnrollID3.style.display = "none";
    } else {
      checkDragableSpace3.style.display = "block";
      saveTheEnrollID3.style.display = "block";
      clearTheEnrollID3.style.display = "block";
    }
  } else if (num == 10) {
    var checkDragableSpace4 = document.getElementById(
      "checkCourseDragableSpace4CT"
    );
    var saveTheEnrollID4 = document.getElementById("SaveTheEnrollID4CT");
    var clearTheEnrollID4 = document.getElementById("ClearTheEnrollID4CT");

    if (checkDragableSpace4.style.display === "block") {
      checkDragableSpace4.style.display = "none";
      saveTheEnrollID4.style.display = "none";
      clearTheEnrollID4.style.display = "none";
    } else {
      checkDragableSpace4.style.display = "block";
      saveTheEnrollID4.style.display = "block";
      clearTheEnrollID4.style.display = "block";
    }
  } else if (num == 11) {
    var checkDragableSpace5 = document.getElementById(
      "checkCourseDragableSpace5CT"
    );
    var saveTheEnrollID5 = document.getElementById("SaveTheEnrollID5CT");
    var clearTheEnrollID5 = document.getElementById("ClearTheEnrollID5CT");

    if (checkDragableSpace5.style.display === "block") {
      checkDragableSpace5.style.display = "none";
      saveTheEnrollID5.style.display = "none";
      clearTheEnrollID5.style.display = "none";
    } else {
      checkDragableSpace5.style.display = "block";
      saveTheEnrollID5.style.display = "block";
      clearTheEnrollID5.style.display = "block";
    }
  } else if (num == 12) {
    var checkDragableSpace6 = document.getElementById(
      "checkCourseDragableSpace6CT"
    );
    var saveTheEnrollID6 = document.getElementById("SaveTheEnrollID6CT");
    var clearTheEnrollID6 = document.getElementById("ClearTheEnrollID6CT");

    if (checkDragableSpace6.style.display === "block") {
      checkDragableSpace6.style.display = "none";
      saveTheEnrollID6.style.display = "none";
      clearTheEnrollID6.style.display = "none";
    } else {
      checkDragableSpace6.style.display = "block";
      saveTheEnrollID6.style.display = "block";
      clearTheEnrollID6.style.display = "block";
    }
  }
}

// Slide for check trainers per course
function CheckTrainersPerCourse() {
  document.getElementById("POPUP_checkTrainersPerCourse").style.display =
    "block";
  document.getElementById("maskSectionD").style.display = "block";
}

// function for drop down section with the trainers insances
function OpencheckTrainersPerCourse(num) {

  var checkTrainersPerCourseSpace1 = document.getElementById("checkTrainersPerCourseSpace1");
  var checkTrainersPerCourseSpace2 = document.getElementById("checkTrainersPerCourseSpace2");

  if (num == 1) {
    if (checkTrainersPerCourseSpace1.style.display == "block") {
      checkTrainersPerCourseSpace1.style.display = "none";
    }
    else {
      checkTrainersPerCourseSpace1.style.display = "block";
    }
  }
  else if (num == 2) {
    if (checkTrainersPerCourseSpace2.style.display == "block") {
      checkTrainersPerCourseSpace2.style.display = "none";
    }
    else {
      checkTrainersPerCourseSpace2.style.display = "block";
    }
  }
}

// Slide for marks
function PutMarks() {
  document.getElementById("POPUP_putMarks").style.display = "block";
  document.getElementById("maskSectionE").style.display = "block";
}

// Add trainers quit section
function POPUP_addTrainers_QuitSection() {
  document.getElementById("POPUP_addTrainers").style.display = "none";
  document.getElementById("maskSectionA").style.display = "none";
}

// See trainers quit section
function POPUP_seeTrainers_QuitSection() {
  document.getElementById("POPUP_seeTrainers").style.display = "none";
  document.getElementById("maskSectionB").style.display = "none";
}

// Enroll Trainer to Courses quit section
function POPUP_enrollTrainers_QuitSection() {
  document.getElementById("POPUP_enrollTrainers").style.display = "none";
  document.getElementById("maskSectionC").style.display = "none";
}

// Check Trainers per Course Quit Section
function POPUP_checkTrainersPerCourse_QuitSection() {
  document.getElementById("POPUP_checkTrainersPerCourse").style.display =
    "none";
  document.getElementById("maskSectionD").style.display = "none";
}

// Put Marks Quit Section
function POPUP_putMarks_QuitSection() {
  document.getElementById("POPUP_putMarks").style.display = "none";
  document.getElementById("maskSectionE").style.display = "none";
}

// Block of code that will be creating new Divs when there is new input keeping stable my desing
function CreateTrainer() {
  // Taking valiues from inputs forms and initializing values for usage in the algorithm
  var t_firstName = document.getElementById("inputTFirstName").value;
  var t_lastName = document.getElementById("inputTLastName").value;
  var t_subject = document.getElementById("inputTSubject").value;

  // Creating the Object of the Student
  var trainerCreated = {
    T_FirstName: t_firstName,
    T_LastName: t_lastName,
    T_Subject: t_subject
  };

  // Creating the Div that will have the instance info and giving it corresponed Class and ID
  var CheckTrainerDiv = document.createElement("DIV");
  CheckTrainerDiv.id = "checkTrainer1";
  CheckStudentDiv.className = "checkTrainer";

  // Creating the paragraphs that will have the indo written isnide the div of the instance
  var t_firstNameP = document.createElement("P");
  var t_lastNameP = document.createElement("P");
  var t_subjectP = document.createElement("P");

  // Giving class names to the variables created
  t_firstNameP.className = "TrainersData";
  t_lastNameP.className = "TrainersData";
  t_subjectP.className = "TrainersData";

  // Creating Text nodes so they can be added to the paragraphs xreated erlier
  var CheckTrainerDataTable1 = document.createTextNode(
    "First Name: " + trainerCreated.T_FirstName
  );
  var CheckTrainerDataTable2 = document.createTextNode(
    "First Name: " + trainerCreated.T_LastName
  );
  var CheckTrainerDataTable3 = document.createTextNode(
    "First Name: " + trainerCreated.T_Subject
  );

  // Adding the text created variables to the Paragraphs inside the div of the instance
  t_firstNameP.appendChild(CheckTrainerDataTable1);
  t_lastNameP.appendChild(CheckTrainerDataTable2);
  t_subjectP.appendChild(CheckTrainerDataTable3);

  // Adding texts to the div of the instance
  CheckTrainerDiv.appendChild(t_firstNameP);
  CheckTrainerDiv.appendChild(t_lastNameP);
  CheckTrainerDiv.appendChild(t_subjectP);

  // Adding the div to the COntainer with all the other instance divs
  document.getElementById("trainerList").appendChild(CheckTrainerDiv);
}

// Course Object and Displaying in the see Courses Section Block of Code jsut for Showcase
// Please Use the Above Method to create new instances and see how it works (it works amazingly well);
function CheckTrainersData() {
  var trainer = {
    T_FirstName: "Periklis",
    T_LastName: "Aidinopoulos",
    T_Subject: "C#"
  };

  // Section for Check Trainers in Private School
  var tfn = document.getElementById("T_FirstNameID");
  var tln = document.getElementById("T_LastNameID");
  var tsub = document.getElementById("T_SubjectID");

  tfn.innerHTML = "First Name: " + trainer.T_FirstName;
  tln.innerHTML = "Last Name: " + trainer.T_LastName;
  tsub.innerHTML = "Subject: " + trainer.T_Subject;

  // Section for Enroll Trainers to Course
  var tfn1 = document.getElementById("T_FirstNameID11");
  var tln1 = document.getElementById("T_LastNameID11");
  var tsub1 = document.getElementById("T_SubjectID11");

  tfn1.innerHTML = "First Name: " + trainer.T_FirstName;
  tln1.innerHTML = "Last Name: " + trainer.T_LastName;
  tsub1.innerHTML = "Subject: " + trainer.T_Subject;

  var course = {
    C_Title: "BC9",
    C_Stream: "C#",
    C_Type: "Part-Time",
    C_StartDate: "7/9/2019",
    C_EndDate: "26/4/2020"
  };


  var title1 = document.getElementById("C_TitleID21");
  var stream1 = document.getElementById("C_StreamID21");
  var type1 = document.getElementById("C_TypeID21");
  var startDate1 = document.getElementById("C_StartDateID21");
  var endDate1 = document.getElementById("C_EndDateID21");

  title1.innerHTML = "Course title: " + course.C_Title;
  stream1.innerHTML = "Stream: " + course.C_Stream;
  type1.innerHTML = "Type: " + course.C_Type;
  startDate1.innerHTML = "Starting Date: " + course.C_StartDate;
  endDate1.innerHTML = "Ending Date: " + course.C_EndDate;

  // Section for Check Trainers Per Courses

  var title2 = document.getElementById("C_TitleID27");
  var stream2 = document.getElementById("C_StreamID27");
  var type2 = document.getElementById("C_TypeID27");
  var startDate2 = document.getElementById("C_StartDateID27");
  var endDate2 = document.getElementById("C_EndDateID27");

  title2.innerHTML = "Course title: " + course.C_Title;
  stream2.innerHTML = "Stream: " + course.C_Stream;
  type2.innerHTML = "Type: " + course.C_Type;
  startDate2.innerHTML = "Starting Date: " + course.C_StartDate;
  endDate2.innerHTML = "Ending Date: " + course.C_EndDate;

  var tfn2 = document.getElementById("T_FirstNameID17");
  var tln2 = document.getElementById("T_LastNameID17");
  var tsub2 = document.getElementById("T_SubjectID17");

  tfn2.innerHTML = "First Name: " + trainer.T_FirstName;
  tln2.innerHTML = "Last Name: " + trainer.T_LastName;
  tsub2.innerHTML = "Subject: " + trainer.T_Subject;

}

/* Trainers Page Section Ends */

/* Assignments Page Section Starts */

// Slide for Adding Assignments
function AddAssignments() {
  document.getElementById("POPUP_addAssignments").style.display = "block";
  document.getElementById("maskSectionA").style.display = "block";
}

// Slide for Checking Assignments
function SeeAssignments() {
  document.getElementById("POPUP_seeAssignments").style.display = "block";
  document.getElementById("maskSectionB").style.display = "block";
}

// Slide for Enrolling Assignments to Courses
function EnrollAssignmnets() {
  document.getElementById("POPUP_enrollAssignmnets").style.display = "block";
  document.getElementById("maskSectionC").style.display = "block";
}

// Dragable Content for Students Block of Code
function allowDropCA(ev) {
  ev.preventDefault();
}

function dragCA(ev) {
  ev.dataTransfer.setData("div", ev.target.id);
}

function dropCA(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("div");
  ev.target.appendChild(document.getElementById(data));
}

// Drop down for dragable divs
function OpencheckCourseDragableSpaceCA(num) {
  if (num == 13) {
    var checkCourseDragableSpace1CA = document.getElementById(
      "checkCourseDragableSpace1CA"
    );
    var saveTheEnrollID1 = document.getElementById("SaveTheEnrollID1CA");
    var clearTheEnrollID1 = document.getElementById("ClearTheEnrollID1CA");

    if (checkCourseDragableSpace1CA.style.display === "block") {
      checkCourseDragableSpace1CA.style.display = "none";
      saveTheEnrollID1.style.display = "none";
      clearTheEnrollID1.style.display = "none";
    } else {
      checkCourseDragableSpace1CA.style.display = "block";
      saveTheEnrollID1.style.display = "block";
      clearTheEnrollID1.style.display = "block";
    }
  } else if (num == 14) {
    var checkCourseDragableSpace2CA = document.getElementById(
      "checkCourseDragableSpace2CA"
    );
    var saveTheEnrollID2 = document.getElementById("SaveTheEnrollID2CA");
    var clearTheEnrollID2 = document.getElementById("ClearTheEnrollID2CA");

    if (checkCourseDragableSpace2CA.style.display === "block") {
      checkCourseDragableSpace2CA.style.display = "none";
      saveTheEnrollID2.style.display = "none";
      clearTheEnrollID2.style.display = "none";
    } else {
      checkCourseDragableSpace2CA.style.display = "block";
      saveTheEnrollID2.style.display = "block";
      clearTheEnrollID2.style.display = "block";
    }
  } else if (num == 15) {
    var checkCourseDragableSpace3CA = document.getElementById(
      "checkCourseDragableSpace3CA"
    );
    var saveTheEnrollID3 = document.getElementById("SaveTheEnrollID3CA");
    var clearTheEnrollID3 = document.getElementById("ClearTheEnrollID3CA");

    if (checkCourseDragableSpace3CA.style.display === "block") {
      checkCourseDragableSpace3CA.style.display = "none";
      saveTheEnrollID3.style.display = "none";
      clearTheEnrollID3.style.display = "none";
    } else {
      checkCourseDragableSpace3CA.style.display = "block";
      saveTheEnrollID3.style.display = "block";
      clearTheEnrollID3.style.display = "block";
    }
  } else if (num == 16) {
    var checkCourseDragableSpace4CA = document.getElementById(
      "checkCourseDragableSpace4CA"
    );
    var saveTheEnrollID4 = document.getElementById("SaveTheEnrollID4CA");
    var clearTheEnrollID4 = document.getElementById("ClearTheEnrollID4CA");

    if (checkCourseDragableSpace4CA.style.display === "block") {
      checkCourseDragableSpace4CA.style.display = "none";
      saveTheEnrollID4.style.display = "none";
      clearTheEnrollID4.style.display = "none";
    } else {
      checkCourseDragableSpace4CA.style.display = "block";
      saveTheEnrollID4.style.display = "block";
      clearTheEnrollID4.style.display = "block";
    }
  } else if (num == 17) {
    var checkCourseDragableSpace5CA = document.getElementById(
      "checkCourseDragableSpace5CA"
    );
    var saveTheEnrollID5 = document.getElementById("SaveTheEnrollID5CA");
    var clearTheEnrollID5 = document.getElementById("ClearTheEnrollID5CA");

    if (checkCourseDragableSpace5CA.style.display === "block") {
      checkCourseDragableSpace5CA.style.display = "none";
      saveTheEnrollID5.style.display = "none";
      clearTheEnrollID5.style.display = "none";
    } else {
      checkCourseDragableSpace5CA.style.display = "block";
      saveTheEnrollID5.style.display = "block";
      clearTheEnrollID5.style.display = "block";
    }
  } else if (num == 18) {
    var checkCourseDragableSpace6CA = document.getElementById(
      "checkCourseDragableSpace6CA"
    );
    var saveTheEnrollID6 = document.getElementById("SaveTheEnrollID6CA");
    var clearTheEnrollID6 = document.getElementById("ClearTheEnrollID6CA");

    if (checkCourseDragableSpace6CA.style.display === "block") {
      checkCourseDragableSpace6CA.style.display = "none";
      saveTheEnrollID6.style.display = "none";
      clearTheEnrollID6.style.display = "none";
    } else {
      checkCourseDragableSpace6CA.style.display = "block";
      saveTheEnrollID6.style.display = "block";
      clearTheEnrollID6.style.display = "block";
    }
  }
}

// Check Assignments Per Courses
function CheckAssignmnetPerCourse() {
  document.getElementById("POPUP_checkAssignmnetPerCourse").style.display =
    "block";
  document.getElementById("maskSectionD").style.display = "block";
}

// Function to drop down the space with the students enrolled in the courses
function OpencheckAssignmentsPerCourse(num) {

  var checkAssignmnetsPerCourseSpace1 = document.getElementById("checkAssignmentsPerCourseSpace1");
  var checkAssignmnetsPerCourseSpace2 = document.getElementById("checkAssignmentsPerCourseSpace2");

  if (num == 1) {
    if (checkAssignmnetsPerCourseSpace1.style.display == "block") {
      checkAssignmnetsPerCourseSpace1.style.display = "none";
    }
    else {
      checkAssignmnetsPerCourseSpace1.style.display = "block";
    }
  }
  else if (num == 2) {
    if (checkAssignmnetsPerCourseSpace2.style.display == "block") {
      checkAssignmnetsPerCourseSpace2.style.display = "none";
    }
    else {
      checkAssignmnetsPerCourseSpace2.style.display = "block";
    }
  }
}

// Enroll Assignments to Students
function EnrollAssignmentsToStudents() {
  document.getElementById("POPUP_enrollAssignmentsToStudents").style.display =
    "block";
  document.getElementById("maskSectionE").style.display = "block";
}

// Dragable Content for Assignment to Enroll them to Students Block of Code
function allowDropSA(ev) {
  ev.preventDefault();
}

function dragSA(ev) {
  ev.dataTransfer.setData("div", ev.target.id);
}

function dropSA(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("div");
  ev.target.appendChild(document.getElementById(data));
}

// Drop down for dragable divs
function OpencheckcheckStudentsWithAssignmentsDragable1Space(num) {
  if (num == 1) {
    var checkStudentsWithAssignmentsSpace1 = document.getElementById(
      "checkStudentsWithAssignmentsSpace1"
    );
    var SaveTheEnrollIDSA1 = document.getElementById("SaveTheEnrollIDSA1");
    var ClearTheEnrollIDSA1 = document.getElementById("ClearTheEnrollIDSA1");

    if (checkStudentsWithAssignmentsSpace1.style.display === "block") {
      checkStudentsWithAssignmentsSpace1.style.display = "none";
      SaveTheEnrollIDSA1.style.display = "none";
      ClearTheEnrollIDSA1.style.display = "none";
    } else {
      checkStudentsWithAssignmentsSpace1.style.display = "block";
      SaveTheEnrollIDSA1.style.display = "block";
      ClearTheEnrollIDSA1.style.display = "block";
    }
  } else if (num == 2) {
    var checkStudentsWithAssignmentsSpace2 = document.getElementById(
      "checkStudentsWithAssignmentsSpace2"
    );
    var SaveTheEnrollIDSA2 = document.getElementById("SaveTheEnrollID1SA2");
    var ClearTheEnrollIDSA2 = document.getElementById("ClearTheEnrollID1SA2");

    if (checkStudentsWithAssignmentsSpace2.style.display === "block") {
      checkStudentsWithAssignmentsSpace2.style.display = "none";
      SaveTheEnrollIDSA2.style.display = "none";
      ClearTheEnrollIDSA2.style.display = "none";
    } else {
      checkStudentsWithAssignmentsSpace2.style.display = "block";
      SaveTheEnrollIDSA2.style.display = "block";
      ClearTheEnrollIDSA2.style.display = "block";
    }
  } else if (num == 3) {
    var checkStudentsWithAssignmentsSpace3 = document.getElementById(
      "checkStudentsWithAssignmentsSpace3"
    );
    var SaveTheEnrollIDSA3 = document.getElementById("SaveTheEnrollID1SA3");
    var ClearTheEnrollIDSA3 = document.getElementById("ClearTheEnrollID1SA3");

    if (checkStudentsWithAssignmentsSpace3.style.display === "block") {
      checkStudentsWithAssignmentsSpace3.style.display = "none";
      SaveTheEnrollIDSA3.style.display = "none";
      ClearTheEnrollIDSA3.style.display = "none";
    } else {
      checkStudentsWithAssignmentsSpace3.style.display = "block";
      SaveTheEnrollIDSA3.style.display = "block";
      ClearTheEnrollIDSA3.style.display = "block";
    }
  } else if (num == 4) {
    var checkStudentsWithAssignmentsSpace4 = document.getElementById(
      "checkStudentsWithAssignmentsSpace4"
    );
    var SaveTheEnrollIDSA4 = document.getElementById("SaveTheEnrollID1SA4");
    var ClearTheEnrollIDSA4 = document.getElementById("ClearTheEnrollID1SA4");

    if (checkStudentsWithAssignmentsSpace4.style.display === "block") {
      checkStudentsWithAssignmentsSpace4.style.display = "none";
      SaveTheEnrollIDSA4.style.display = "none";
      ClearTheEnrollIDSA4.style.display = "none";
    } else {
      checkStudentsWithAssignmentsSpace4.style.display = "block";
      SaveTheEnrollIDSA4.style.display = "block";
      ClearTheEnrollIDSA4.style.display = "block";
    }
  } else if (num == 5) {
    var checkStudentsWithAssignmentsSpace5 = document.getElementById(
      "checkStudentsWithAssignmentsSpace5"
    );
    var SaveTheEnrollIDSA5 = document.getElementById("SaveTheEnrollID1SA5");
    var ClearTheEnrollIDSA5 = document.getElementById("ClearTheEnrollID1SA5");

    if (checkStudentsWithAssignmentsSpace5.style.display === "block") {
      checkStudentsWithAssignmentsSpace5.style.display = "none";
      SaveTheEnrollIDSA5.style.display = "none";
      ClearTheEnrollIDSA5.style.display = "none";
    } else {
      checkStudentsWithAssignmentsSpace5.style.display = "block";
      SaveTheEnrollIDSA5.style.display = "block";
      ClearTheEnrollIDSA5.style.display = "block";
    }
  } else if (num == 6) {
    var checkStudentsWithAssignmentsSpace6 = document.getElementById(
      "checkStudentsWithAssignmentsSpace6"
    );
    var SaveTheEnrollIDSA6 = document.getElementById("SaveTheEnrollID1SA6");
    var ClearTheEnrollIDSA6 = document.getElementById("ClearTheEnrollID1SA6");

    if (checkStudentsWithAssignmentsSpace6.style.display === "block") {
      checkStudentsWithAssignmentsSpace6.style.display = "none";
      SaveTheEnrollIDSA6.style.display = "none";
      ClearTheEnrollIDSA6.style.display = "none";
    } else {
      checkStudentsWithAssignmentsSpace6.style.display = "block";
      SaveTheEnrollIDSA6.style.display = "block";
      ClearTheEnrollIDSA6.style.display = "block";
    }
  }
}

// Check assignments per Student per Course
function CheckAssignmentsPerStudentPerCourse() {
  document.getElementById(
    "POPUP_checkAssignmentsPerStudentPerCourse"
  ).style.display = "block";
  document.getElementById("maskSectionF").style.display = "block";
}

// Add assignments quit section
function POPUP_addAssignments_QuitSection() {
  document.getElementById("POPUP_addAssignments").style.display = "none";
  document.getElementById("maskSectionA").style.display = "none";
}

// Check assignments quit section
function POPUP_seeAssignments_QuitSection() {
  document.getElementById("POPUP_seeAssignments").style.display = "none";
  document.getElementById("maskSectionB").style.display = "none";
}

// Enroll assignments quit section
function POPUP_enrollAssignmnets_QuitSection() {
  document.getElementById("POPUP_enrollAssignmnets").style.display = "none";
  document.getElementById("maskSectionC").style.display = "none";
}

// Chech assignment per course Quit Section
function POPUP_checkAssignmnetPerCourse_QuitSection() {
  document.getElementById("POPUP_checkAssignmnetPerCourse").style.display =
    "none";
  document.getElementById("maskSectionD").style.display = "none";
}

// Enroll assignmnets to Students Quit Section
function POPUP_enrollAssignmentsToStudents_QuitSection() {
  document.getElementById("POPUP_enrollAssignmentsToStudents").style.display =
    "none";
  document.getElementById("maskSectionE").style.display = "none";
}

// Check assignmnets per Students Per Course Section
function POPUP_checkAssignmentsPerStudentPerCourse_QuitSection() {
  document.getElementById(
    "POPUP_checkAssignmentsPerStudentPerCourse"
  ).style.display = "none";
  document.getElementById("maskSectionF").style.display = "none";
}

// Block of code that will be creating new Divs when there is new input keeping stable my desing
function CreateAssignment() {
  // Taking valiues from inputs forms and initializing values for usage in the algorithm
  var a_Title = document.getElementById("inputATitle").value;
  var a_Descreption = document.getElementById("inputADescreption").value;
  var a_Deadline = document.getElementById("inputADeadline").value;

  // Creating the Object of the Student
  var assignmentCreated = {
    A_Title: a_Title,
    A_Descreption: a_Descreption,
    A_Deadline: a_Deadline
  };

  // Creating the Div that will have the instance info and giving it corresponed Class and ID
  var CheckAssignmentDiv = document.createElement("DIV");
  CheckAssignmentDiv.id = "checkAssignment1";
  CheckAssignmentDiv.className = "checkAssignment";

  // Creating the paragraphs that will have the indo written isnide the div of the instance
  var a_TitleP = document.createElement("P");
  var a_DescreptionP = document.createElement("P");
  var a_DeadlineP = document.createElement("P");

  // Giving class names to the variables created
  a_TitleP.className = "AssignmentData";
  a_DescreptionP.className = "AssignmentData";
  a_DeadlineP.className = "AssignmentData";

  // Creating Text nodes so they can be added to the paragraphs xreated erlier
  var CheckAssignmentDataTable1 = document.createTextNode(
    "Title: " + assignmentCreated.A_Title
  );
  var CheckAssignmentDataTable2 = document.createTextNode(
    "Descreption: " + assignmentCreated.A_Descreption
  );
  var CheckAssignmentDataTable3 = document.createTextNode(
    "Deadline: " + assignmentCreated.A_SubDateTime
  );

  // Adding the text created variables tto the Paragraphs inside the div of the instance
  a_TitleP.appendChild(CheckAssignmentDataTable1);
  a_DescreptionP.appendChild(CheckAssignmentDataTable2);
  a_DeadlineP.appendChild(CheckAssignmentDataTable3);

  // Adding texts to the div of the instance
  CheckAssignmentDiv.appendChild(a_TitleP);
  CheckAssignmentDiv.appendChild(a_DescreptionP);
  CheckAssignmentDiv.appendChild(a_DeadlineP);

  // Adding the div to the COntainer with all the other instance divs
  document.getElementById("studentsList").appendChild(CheckAssignmentDiv);
}

// Course Object and Displaying in the see Courses Section Block of Code jsut for Showcase
// Please Use the Above Method to create new instances and see how it works (it works amazingly well);

function CheckAssignmentsData() {
  var assignment = {
    A_Title: "Create Private School Back End",
    A_Descreption:
      "You must create private school back end with the following functionalities:.....",
    A_SubDateTime: "17/1/2020"
  };

  // Section Check Assignments in Private School
  var at = document.getElementById("A_TitleID");
  var adesc = document.getElementById("A_DescreptionID");
  var asubd = document.getElementById("A_SubDateID");

  at.innerHTML = "Title: " + assignment.A_Title;
  adesc.innerHTML = "Descreption: " + assignment.A_Descreption;
  asubd.innerHTML = "Deadline: " + assignment.A_SubDateTime;

  // Section Enroll Assignments to Courses
  var at1 = document.getElementById("A_TitleID11");
  var adesc1 = document.getElementById("A_DescreptionID11");
  var asubd1 = document.getElementById("A_SubDateID11");

  at1.innerHTML = "Title: " + assignment.A_Title;
  adesc1.innerHTML = "Descreption: " + assignment.A_Descreption;
  asubd1.innerHTML = "Deadline: " + assignment.A_SubDateTime;

  var course = {
    C_Title: "BC9",
    C_Stream: "C#",
    C_Type: "Part-Time",
    C_StartDate: "7/9/2019",
    C_EndDate: "26/4/2020"
  };

  var title3 = document.getElementById("C_TitleID31");
  var stream3 = document.getElementById("C_StreamID31");
  var type3 = document.getElementById("C_TypeID31");
  var startDate3 = document.getElementById("C_StartDateID31");
  var endDate3 = document.getElementById("C_EndDateID31");

  title3.innerHTML = "Course title: " + course.C_Title;
  stream3.innerHTML = "Stream: " + course.C_Stream;
  type3.innerHTML = "Type: " + course.C_Type;
  startDate3.innerHTML = "Starting Date: " + course.C_StartDate;
  endDate3.innerHTML = "Ending Date: " + course.C_EndDate;

  // Section for check Assignmnets per Courses
  var at12 = document.getElementById("A_TitleID17");
  var adesc12 = document.getElementById("A_DescreptionID17");
  var asubd12 = document.getElementById("A_SubDateID17");

  at12.innerHTML = "Title: " + assignment.A_Title;
  adesc12.innerHTML = "Descreption: " + assignment.A_Descreption;
  asubd12.innerHTML = "Deadline: " + assignment.A_SubDateTime;

  var title31 = document.getElementById("C_TitleID37");
  var stream31 = document.getElementById("C_StreamID37");
  var type31 = document.getElementById("C_TypeID37");
  var startDate31 = document.getElementById("C_StartDateID37");
  var endDate31 = document.getElementById("C_EndDateID37");

  title31.innerHTML = "Course title: " + course.C_Title;
  stream31.innerHTML = "Stream: " + course.C_Stream;
  type31.innerHTML = "Type: " + course.C_Type;
  startDate31.innerHTML = "Starting Date: " + course.C_StartDate;
  endDate31.innerHTML = "Ending Date: " + course.C_EndDate;

  // Section for Assignment enroll to Students
  var student = {
    S_FirstName: "Daniel",
    S_LastName: "Bogdan",
    S_BirthDay: "26/4/1995",
    S_Fees: "1980 euros"
  };

  var sfn3 = document.getElementById("S_FirstNameID21");
  var sln3 = document.getElementById("S_LastNameID21");
  var sdob3 = document.getElementById("S_DateOfBirthID21");
  var sf3 = document.getElementById("S_FeesID21");

  sfn3.innerHTML = "First Name: " + student.S_FirstName;
  sln3.innerHTML = "Last Name: " + student.S_LastName;
  sdob3.innerHTML = "Date of Birth: " + student.S_BirthDay;
  sf3.innerHTML = "Fees: " + student.S_Fees;

  var at123 = document.getElementById("A_TitleID113");
  var adesc123 = document.getElementById("A_DescreptionID113");
  var asubd123 = document.getElementById("A_SubDateID113");

  at123.innerHTML = "Title: " + assignment.A_Title;
  adesc123.innerHTML = "Descreption: " + assignment.A_Descreption;
  asubd123.innerHTML = "Deadline: " + assignment.A_SubDateTime;

}


/* Assignments Page Section Ends */
