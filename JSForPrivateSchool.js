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

// Check Students Per COurse Section
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
  
  var sfn = document.getElementById("S_FirstNameID");
  var sln = document.getElementById("S_LastNameID");
  var sdob = document.getElementById("S_DateOfBirthID");
  var sf = document.getElementById("S_Fees");
  
  sfn.innerHTML = "First Name: " + student.S_FirstName;
  sln.innerHTML = "Last Name: " + student.S_LastName;
  sdob.innerHTML = "Date of Birth: " + student.S_BirthDay;
  sf.innerHTML = "Fees: " + student.S_Fees;
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
function CheckTrainersData(){
  var trainer = {
    T_FirstName: "Periklis",
    T_LastName: "Aidinopoulos",
    T_Subject: "C#"
  };
  
  var tfn = document.getElementById("T_FirstNameID");
  var tln = document.getElementById("T_LastNameID");
  var tsub = document.getElementById("T_SubjectID");
  
  tfn.innerHTML = "First Name: " + trainer.T_FirstName;
  tln.innerHTML = "Last Name: " + trainer.T_LastName;
  tsub.innerHTML = "Subject: " + trainer.T_Subject;
  
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
    A_Deadline: a_Deadline,
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
  var CheckAssignmentDataTable1 = document.createTextNode("Title: " + assignmentCreated.A_Title);
  var CheckAssignmentDataTable2 = document.createTextNode("Descreption: " + assignmentCreated.A_Descreption);
  var CheckAssignmentDataTable3 = document.createTextNode("Deadline: " + assignmentCreated.A_SubDateTime);
  
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
    A_Descreption: "You must create private school back end with the following functionalities:.....",
    A_SubDateTime: "17/1/2020",
  };
  
  var at = document.getElementById("A_TitleID");
  var adesc = document.getElementById("A_DescreptionID");
  var asubd = document.getElementById("A_SubDateID");
  
  at.innerHTML = "Title: " + assignment.A_Title;
  adesc.innerHTML = "Descreption: " + assignment.A_Descreption;
  asubd.innerHTML = "Deadline: " + assignment.A_SubDateTime;
}

/* Assignments Page Section Ends */
