

(function (globals) {

  var django = globals.django || (globals.django = {});

  
  django.pluralidx = function (n) {
    var v=0;
    if (typeof(v) == 'boolean') {
      return v ? 1 : 0;
    } else {
      return v;
    }
  };
  

  
  /* gettext library */

  django.catalog = {
    "#Replies": "#\ub2f5\uae00\ub4e4", 
    "%(num_questions)s question": [
      "%(num_questions)s\uac1c"
    ], 
    "%(num_students)s student": [
      " %(num_students)s \uba85 "
    ], 
    "%(num_students)s student opened Subsection": [
      "\uc18c\uc8fc\uc81c\ub97c \uc5f4\uc5b4\ubcf8 \ud559\uc2b5\uc790\ub4e4 : %(num_students)s"
    ], 
    "%(team_count)s Team": [
      "%(team_count)s \ud300"
    ], 
    "%(value)s hour": [
      "%(value)s \uc2dc\uac04"
    ], 
    "%(value)s minute": [
      "%(value)s \ubd84"
    ], 
    "%(value)s second": [
      "%(value)s \ucd08"
    ], 
    "%d day": [
      "%d \uc77c"
    ], 
    "%d minute": [
      "%d \ubd84"
    ], 
    "%d month": [
      "%d \uac1c\uc6d4"
    ], 
    "%d year": [
      "%d \ub144"
    ], 
    "%s ago": "%s \uc804", 
    "%s from now": "\uc9c0\uae08\uc73c\ub85c \ubd80\ud130 %s \uc774\ud6c4", 
    "Account Settings": "\uacc4\uc815 \uc124\uc815", 
    "Add Cohort": "\ud559\uc2b5\uc9d1\ub2e8 \ucd94\uac00\ud558\uae30", 
    "Add a New Cohort": "\uc2e0\uaddc \ud559\uc2b5 \uc9d1\ub2e8 \ucd94\uac00", 
    "Adding the selected course to your cart": "\uc7a5\ubc14\uad6c\ub2c8\uc5d0 \uc120\ud0dd\ub41c \uac15\uc88c\ub97c \ucd94\uac00\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.", 
    "All accounts were created successfully.": "\ubaa8\ub4e0 \uacc4\uc815\uc774 \uc0dd\uc131\ub418\uc5c8\uc2b5\ub2c8\ub2e4.", 
    "All flags have been removed. To undo, uncheck the box.": "\ubaa8\ub4e0 \ud50c\ub798\uadf8\uac00 \uc81c\uac70\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ucde8\uc18c\ud558\ub824\uba74 \ubc15\uc2a4 \uc120\ud0dd\uc744 \ucde8\uc18c\ud558\uc138\uc694", 
    "All subsections": "\ubaa8\ub4e0 \uc18c\uc8fc\uc81c", 
    "All units": "\uc804\uccb4 \ud559\uc2b5\ud65c\ub3d9", 
    "Allow students to generate certificates for this course?": "\ud559\uc2b5\uc790\uc758 \uc774\uc218\uc99d \uc0dd\uc131\uc744 \ud5c8\uc6a9\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?", 
    "An error has occurred. Make sure that you are connected to the Internet, and then try refreshing the page.": "\uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4. \uc778\ud130\ub137\uc5d0 \uc5f0\uacb0\ub418\uc5b4 \uc788\ub294\uc9c0 \ud655\uc778\ud55c \ud6c4, \ud398\uc774\uc9c0\ub97c \uc0c8\ub85c\uace0\uce68 \ud558\uc138\uc694.", 
    "An error has occurred. Please try again later.": "\uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud558\uc138\uc694.", 
    "An error has occurred. Please try again.": "\uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud558\uc138\uc694.", 
    "An error has occurred. Please try reloading the page.": "\uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4. \ud398\uc774\uc9c0\ub97c \ub2e4\uc2dc \ubd88\ub7ec\uc624\uc138\uc694.", 
    "An error has occurred. Refresh the page, and then try again.": "\uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4. \ud398\uc774\uc9c0\ub97c \uc0c8\ub85c\uace0\uce68\ud55c \ud6c4, \ub2e4\uc2dc \uc2dc\ub3c4\ud558\uc138\uc694. ", 
    "An error occurred retrieving your email. Please try again later, and contact technical support if the problem persists.": "\uc774\uba54\uc77c\uc744 \uac80\uc0c9\ud558\ub294 \ub3d9\uc548 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4. \ub098\uc911\uc5d0 \ub2e4\uc2dc \uc2dc\ub3c4\ud55c \ud6c4, \ubb38\uc81c\uac00 \uc9c0\uc18d\ub418\uba74 \uae30\uc220 \uc9c0\uc6d0\ud300\uc5d0 \uc5f0\ub77d\uc8fc\uc138\uc694.", 
    "An error occurred. Make sure that the student's username or email address is correct and try again.": "\uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4. \ud559\uc2b5\uc790\uc758 \uc544\uc774\ub514\uc640 \uc774\uba54\uc77c \uc8fc\uc18c\uac00 \uc62c\ubc14\ub978\uc9c0 \ud655\uc778\ud558\uace0 \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.", 
    "An error occurred. Please try again.": "\uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4. \uc7a0\uc2dc \ud6c4\uc5d0 \ub2e4\uc2dc \uc2dc\ub3c4\ud558\uc138\uc694.", 
    "Annotation": "\uc8fc\uc11d", 
    "Annotation Text": "\uc8fc\uc11d \ud14d\uc2a4\ud2b8", 
    "Are you sure you want to delete this comment?": "\uc774 \ub313\uae00\uc744 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?", 
    "Are you sure you want to delete this post?": "\uc774 \uac8c\uc2dc\ubb3c\uc744 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?", 
    "Are you sure you want to delete this response?": "\uc774 \ub2f5\ubcc0\uc744 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?", 
    "Assign students to cohorts by uploading a CSV file.": "CSV \ud30c\uc77c\uc744 \uc5c5\ub85c\ub4dc\ud558\uc5ec \ud559\uc2b5 \uc9d1\ub2e8\uc5d0 \ud559\uc2b5\uc790\ub97c \ucd94\uac00\ud558\uc138\uc694.", 
    "Average": "\ubcf4\ud1b5", 
    "Blockquote": "\ube14\ub85d \uc778\uc6a9", 
    "Blockquote (Ctrl+Q)": "\ube14\ub85d\uc778\uc6a9 (Ctrl+Q)", 
    "Bold (Ctrl+B)": "\uc9c4\ud558\uac8c (Ctrl+B)", 
    "Bulleted List (Ctrl+U)": "\uae00\uba38\ub9ac\ud45c (Ctrl+U)", 
    "Cancel": "\ucde8\uc18c", 
    "Cancel enrollment code": "\uc218\uac15\uc2e0\uccad \ucf54\ub4dc\ub97c \ucde8\uc18c\ud558\uc138\uc694.", 
    "Change image": "\uc774\ubbf8\uc9c0 \ubcc0\uacbd", 
    "Check the box to remove %(count)s flag.": [
      "%(count)s \ud50c\ub798\uadf8\ub97c \uc0ad\uc81c\ud558\ub824\uba74 \ud655\uc778\ub780\uc744 \uc120\ud0dd\ud569\ub2c8\ub2e4."
    ], 
    "Check the box to remove %(totalFlags)s flag.": [
      "%(totalFlags)s \ud50c\ub798\uadf8\ub97c \uc0ad\uc81c\ud558\ub824\uba74 \ud655\uc778\ub780\uc744 \uc120\ud0dd\ud569\ub2c8\ub2e4."
    ], 
    "Check the box to remove all flags.": "\ubaa8\ub4e0 \ud50c\ub798\uadf8\ub97c \uc0ad\uc81c\ud558\ub824\uba74 \ud655\uc778\ub780\uc744 \uc120\ud0dd\ud569\ub2c8\ub2e4.", 
    "Check your email": "\uc774\uba54\uc77c\uc744 \ud655\uc778\ud558\uc2ed\uc2dc\uc694.", 
    "Checkout": "\uacb0\uc81c\ud558\uae30", 
    "Checkout with PayPal": "PayPal\ub85c \uacb0\uc81c\ud558\uae30", 
    "Checkout with {processor}": "{processor}\ub85c \uacb0\uc81c\ud558\uae30", 
    "Choose a .csv file": ".csv \ud30c\uc77c\uc744 \uc120\ud0dd\ud558\uc2ed\uc2dc\uc624. ", 
    "Clear": "\uc9c0\uc6b0\uae30", 
    "Click OK to have your e-mail address sent to a 3rd party application.\n\nClick Cancel to return to this page without sending your information.": "\uc774\uba54\uc77c \uc8fc\uc18c\ub97c \ud0c0\uc0ac \uc751\uc6a9\ud504\ub85c\uadf8\ub7a8\uc5d0 \ubcf4\ub0b4\ub294 \uac83\uc5d0 \ub3d9\uc758\ud558\uba74 OK\ub97c \ud074\ub9ad\ud558\uc138\uc694.\n\uadc0\ud558\uc758 \uc815\ubcf4\ub97c \ubcf4\ub0b4\uc9c0 \uc54a\uace0, \uc774 \ud398\uc774\uc9c0\ub97c \ub2e4\uc2dc \ubcf4\ub824\uba74 Cancel\uc744 \ud074\ub9ad\ud558\uc138\uc694.", 
    "Click OK to have your username and e-mail address sent to a 3rd party application.\n\nClick Cancel to return to this page without sending your information.": "\uadc0\ud558\uc758 \uc544\uc774\ub514\uc640 \uc774\uba54\uc77c \uc8fc\uc18c\ub97c \ud0c0\uc0ac \uc751\uc6a9\ud504\ub85c\uadf8\ub7a8\uc5d0 \ubcf4\ub0b4\ub294 \uac83\uc5d0 \ub3d9\uc758\ud558\uba74 OK\ub97c \ud074\ub9ad\ud558\uc138\uc694.\n\uadc0\ud558\uc758 \uc815\ubcf4\ub97c \ubcf4\ub0b4\uc9c0 \uc54a\uace0, \uc774 \ud398\uc774\uc9c0\ub97c \ub2e4\uc2dc \ubcf4\ub824\uba74 Cancel\uc744 \ud074\ub9ad\ud558\uc138\uc694.", 
    "Click OK to have your username sent to a 3rd party application.\n\nClick Cancel to return to this page without sending your information.": "\uadc0\ud558\uc758\uc544\uc774\ub514\ub97c \ud0c0\uc0ac \uc751\uc6a9\ud504\ub85c\uadf8\ub7a8\uc5d0 \ubcf4\ub0b4\ub294 \uac83\uc5d0 \ub3d9\uc758\ud558\uba74 OK\ub97c \ud074\ub9ad\ud558\uc138\uc694.\n\n\n\uadc0\ud558\uc758 \uc815\ubcf4\ub97c \ubcf4\ub0b4\uc9c0 \uc54a\uace0, \uc774 \ud398\uc774\uc9c0\ub97c \ub2e4\uc2dc \ubcf4\ub824\uba74 Cancel\uc744 \ud074\ub9ad\ud558\uc138\uc694.", 
    "Close": "\ub2eb\uae30", 
    "Code Sample (Ctrl+K)": "\ucf54\ub4dc \uc0d8\ud50c (Ctrl+K)", 
    "Cohort Name": "\ud559\uc2b5\uc9d1\ub2e8\uba85", 
    "Cohorts Disabled": "\ud559\uc2b5\uc9d1\ub2e8\uc774 \ube44\ud65c\uc131\ud654\ub418\uc5c8\uc2b5\ub2c8\ub2e4.", 
    "Cohorts Enabled": "\ud559\uc2b5\uc9d1\ub2e8\uc774 \ud65c\uc131\ud654\ub418\uc5c8\uc2b5\ub2c8\ub2e4.", 
    "Confirm": "\ud655\uc778", 
    "Copy Email To Editor": "\ud3b8\uc9d1\uae30\ub85c \uc774\uba54\uc77c \ubcf5\uc0ac\ud558\uae30", 
    "Could not find users associated with the following identifiers:": "\ub2e4\uc74c \uc2dd\ubcc4\uc790\uc640 \uc5f0\uad00\ub41c \uc0ac\uc6a9\uc790\ub97c \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.", 
    "Could not retrieve payment information": "\uacb0\uc81c \uc815\ubcf4\ub97c \uac80\uc0c9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.", 
    "Could not submit order": "\uc8fc\ubb38\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.", 
    "Could not submit photos": "\uc0ac\uc9c4\uc744 \uc81c\ucd9c \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.", 
    "Country": "\uad6d\uac00", 
    "Create an account using": "\uacc4\uc815 \uc5f0\ub3d9\ud558\uae30", 
    "Creating missing groups": "\ube60\uc9c4 \uadf8\ub8f9 \ub9cc\ub4e4\uae30", 
    "Current conversation": "\ud604\uc7ac \ub300\ud654", 
    "Current tab": "\ud604\uc7ac \ud0ed", 
    "Date": "\ub0a0\uc9dc", 
    "Date posted": "\uac8c\uc2dc\ub41c \ub0a0\uc9dc", 
    "Delete": "\uc0ad\uc81c", 
    "Deleted Content Group": "\ucee8\ud150\uce20 \uadf8\ub8f9 \uc0ad\uc81c", 
    "Deleting a textbook cannot be undone and once deleted any reference to it in your courseware's navigation will also be removed.": "\uad50\uc7ac\ub97c \uc0ad\uc81c\ud558\uba74 \ub418\ub3cc\ub9b4 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uc0ad\uc81c \ud6c4 \uac15\uc88c \ub0b4\uc6a9 \ud0d0\uc0c9\uc5d0 \ub4e4\uc5b4\uc788\ub294 \ubaa8\ub4e0 \ucc38\uc870\ub3c4 \ud568\uaed8 \uc0ad\uc81c\ub420 \uac83\uc785\ub2c8\ub2e4.", 
    "Description": "\uc124\uba85", 
    "Do not show again": "\ub2e4\uc2dc \uc7ac\uc0dd\ud558\uc9c0 \ub9d0\uae30", 
    "Do you want to allow this student ('{student_id}') to skip the entrance exam?": "\ud559\uc2b5\uc790 ('{student_id}')\uc758 \uc0ac\uc804 \ud3c9\uac00 \uba74\uc81c\ub97c \ud5c8\uc6a9\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?", 
    "Donate": "\uae30\ubd80\ud558\uae30", 
    "Double-check that your webcam is connected and working to continue.": "\uc6f9\ucea0\uc774 \uc5f0\uacb0\ub418\uc5c8\ub294\uc9c0 \uc7ac\ud655\uc778 \ud6c4\uc5d0 \uc9c4\ud589\ud574\uc8fc\uc138\uc694.", 
    "Drop target image": "\ud0c0\uac9f\uc774\ubbf8\uc9c0\ub97c \ub4dc\ub86d\ud558\uc138\uc694", 
    "Duration (sec)": "\uae30\uac04(\ucd08)", 
    "Edit": "\ud3b8\uc9d1", 
    "Editable": "\ud3b8\uc9d1 \uac00\ub2a5", 
    "Education Completed": "\ucd5c\uc885 \ud559\ub825", 
    "Email": "\uc774\uba54\uc77c", 
    "Email Address": "\uc774\uba54\uc77c \uc8fc\uc18c", 
    "Emails successfully sent. The following users are no longer enrolled in the course:": "\uc774\uba54\uc77c \uc804\uc1a1\uc644\ub8cc. \ub2e4\uc74c \uc0ac\uc6a9\uc790\ub4e4\uc740 \uc774 \uac15\uc88c\uc5d0 \ub354\uc774\uc0c1 \ub4f1\ub85d\ub418\uc5b4 \uc788\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4:", 
    "End": "\ub05d", 
    "Enrolling you in the selected course": "\uc120\ud0dd\ub41c \uac15\uc88c\uc5d0 \uc218\uac15\uc2e0\uccad \ucc98\ub9ac\uc911\uc785\ub2c8\ub2e4. ", 
    "Enter a student's username or email address.": "\ud559\uc2b5\uc790\uc758 \uc544\uc774\ub514 \ub610\ub294 \uc774\uba54\uc77c \uc8fc\uc18c\ub97c \uc785\ub825\ud558\uc138\uc694.", 
    "Enter a username or email.": "\uc544\uc774\ub514 \ud639\uc740 \uc774\uba54\uc77c\uc744 \uc785\ub825\ud558\uc138\uc694.", 
    "Enter the enrollment code.": "\uc218\uac15\uc2e0\uccad \ucf54\ub4dc\ub97c \uc785\ub825\ud558\uc138\uc694.", 
    "Enter the name of the cohort": "\ud559\uc2b5\uc9d1\ub2e8\uba85\uc744 \uc785\ub825\ud558\uc138\uc694.", 
    "Enter username or email": "\uc544\uc774\ub514 \ub610\ub294 \uc774\uba54\uc77c\uc744 \uc785\ub825\ud558\uc138\uc694", 
    "Entrance exam attempts is being reset for student '{student_id}'.": "'{student_id}' \ud559\uc2b5\uc790\uac00 \uc2dc\ub3c4\ud55c \uc0ac\uc804 \ud3c9\uac00 \ud69f\uc218\ub294 \ucd08\uae30\ud654\ub429\ub2c8\ub2e4.", 
    "Entrance exam state is being deleted for student '{student_id}'.": "\ud559\uc2b5\uc790 '{student_id}'\uc758 \uc0ac\uc804 \ud3c9\uac00 \uc0c1\ud0dc\ub294 \uc0ad\uc81c\ub429\ub2c8\ub2e4.", 
    "Error": "\uc624\ub958", 
    "Error adding/removing users as beta testers.": "\ubca0\ud0c0\ud14c\uc2a4\ud130 \ucd94\uac00/\uc0ad\uc81c \uc911 \uc624\ub958 \ubc1c\uc0dd", 
    "Error changing user's permissions.": "\uc774\uc6a9\uc790\uc758 \uad8c\ud55c \ubcc0\uacbd \uc5d0\ub7ec", 
    "Error deleting entrance exam state for student '{student_id}'. Make sure student identifier is correct.": "\ud559\uc2b5\uc790 '{student_id}'\uc758 \uc0ac\uc804 \ud3c9\uac00 \uc0c1\ud0dc\ub97c \uc0ad\uc81c\ud558\ub294 \ub3c4\uc911 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4.  \ud559\uc2b5\uc790\uc758 \uace0\uc720\ubc88\ud638\uac00 \uc62c\ubc14\ub978\uc9c0 \ud655\uc778\ud558\uc138\uc694.", 
    "Error enrolling/unenrolling users.": "\uc0ac\uc6a9\uc790 \ub4f1\ub85d/\uc0ad\uc81c \uc2dc \ubc1c\uc0dd\ud55c \uc624\ub958", 
    "Error generating grades. Please try again.": "\uc131\uc801 \uc0dd\uc131 \uc911 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud558\uc138\uc694.", 
    "Error generating list of students who may enroll. Please try again.": "\uc218\uac15\uc2e0\uccad\ud55c \ud559\uc2b5\uc790 \ubaa9\ub85d\uc744 \uc0dd\uc131\ud558\ub294 \uc911 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud558\uc138\uc694.", 
    "Error generating problem grade report. Please try again.": "\uc131\uc801 \ubcf4\uace0\uc11c \uc0dd\uc131 \uc911 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud558\uc138\uc694.", 
    "Error generating student profile information. Please try again.": "\ud559\uc2b5\uc790 \uc815\ubcf4\ub97c \ub9cc\ub4dc\ub294 \uc911 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud558\uc138\uc694.", 
    "Error getting entrance exam task history for student '{student_id}'. Make sure student identifier is correct.": "\ud559\uc2b5\uc790 '{student_id}'\uc758 \uc0ac\uc804 \ud3c9\uac00\uc758 \uacfc\uc81c\uc774\ub825\uc744 \uc0ad\uc81c\ud558\ub294 \ub3c4\uc911 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4. \ud559\uc2b5\uc790\uc758 \uace0\uc720\ubc88\ud638\uac00 \uc62c\ubc14\ub978\uc9c0 \ud655\uc778\ud558\uc138\uc694.", 
    "Error getting student list.": "\ud559\uc2b5\uc790 \ubaa9\ub85d \uac00\uc838\uc624\uae30 \uc5d0\ub7ec.", 
    "Error listing task history for this student and problem.": "\ud559\uc2b5\uc790 \ubc0f \ubb38\uc81c \ub300\ud55c \uc791\uc5c5 \uc624\ub958 \ub0b4\uc5ed \ud45c\uc2dc\uc5d0\uc11c \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4.", 
    "Error resetting entrance exam attempts for student '{student_id}'. Make sure student identifier is correct.": " '{student_id}' \ud559\uc2b5\uc790\uc758 \uc0ac\uc804 \ud3c9\uac00 \ucd08\uae30\ud654\uc5d0 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4. \ud559\uc2b5\uc790 ID\uac00 \uc815\ud655\ud55c\uc9c0 \ud655\uc778\ud558\uc138\uc694.", 
    "Error retrieving grading configuration.": "\uc131\uc801\uc124\uc815 \uac00\uc838\uc624\uae30 \uc5d0\ub7ec", 
    "Error sending email.": "\uba54\uc77c \uc804\uc1a1 \uc624\ub958", 
    "Error starting a task to rescore entrance exam for student '{student_id}'. Make sure that entrance exam has problems in it and student identifier is correct.": " '{student_id}' \ud559\uc2b5\uc790\uc758 \uc0ac\uc804 \ud3c9\uac00 \uc7ac\ucc44\uc810\uc5d0 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4. \uc0ac\uc804 \ud3c9\uac00\uc5d0 \ubb38\ud56d\uc774 \uc788\ub294\uc9c0\uc640 \ud559\uc2b5\uc790 \uc544\uc774\ub514\uac00 \uc815\ud655\ud55c\uc9c0 \ud655\uc778\ud558\uc138\uc694.", 
    "Error while generating certificates. Please try again.": "\uac15\uc88c \uc774\uc218\uc99d\uc744 \ubc1c\uae09\ud558\ub294 \ub3d9\uc548 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud558\uc138\uc694.", 
    "Error:": "\uc624\ub958:", 
    "Error: You cannot remove yourself from the Instructor group!": "\uc624\ub958: \uc790\uc2e0\uc744 \uad50\uc218\uc790 \uadf8\ub8f9\uc5d0\uc11c \uc81c\uac70\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. ", 
    "Errors": "\uc624\ub958", 
    "Exit full browser": "\uc804\uccb4\ud654\uba74\uc5d0\uc11c \ub098\uc624\uae30", 
    "File Name": "\ud30c\uc77c\uc774\ub984", 
    "Fill browser": "\ube0c\ub77c\uc6b0\uc800 \ucc44\uc6b0\uae30", 
    "Full Name": "\uc2e4\uba85", 
    "Gender": "\uc131 ", 
    "Header": "\uba38\ub9bf\uae00", 
    "Heading": "\uc81c\ubaa9", 
    "Heading (Ctrl+H)": "\uc81c\ubaa9 (Ctrl+H)", 
    "Hide Discussion": "\uac8c\uc2dc\ud310 \uac10\ucd94\uae30", 
    "Hide notes": "\ub178\ud2b8 \uac10\ucd94\uae30", 
    "Horizontal Rule (Ctrl+R)": "\uac00\ub85c\uc120 (Ctrl+R)", 
    "How to use %(platform_name)s discussions": "%(platform_name)s \uac8c\uc2dc\ud310 \uc0ac\uc6a9\ubc95", 
    "Hyperlink (Ctrl+L)": "\ud558\uc774\ud37c\ub9c1\ud06c (Ctrl+L)", 
    "If the unit was previously published and released to students, any changes you made to the unit when it was hidden will now be visible to students. Do you want to proceed?": "\ube44\uacf5\uac1c \uc0c1\ud0dc\uc5d0\uc11c \ubcc0\uacbd\ub41c \ub0b4\uc6a9\uc774 \ud559\uc2b5\uc790\uc5d0\uac8c \ubcf4\uc77c \uac83\uc785\ub2c8\ub2e4. \uacc4\uc18d \ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?", 
    "If you use the Advanced Editor, this problem will be converted to XML and you will not be able to return to the Simple Editor Interface.\n\nProceed to the Advanced Editor and convert this problem to XML?": "\uace0\uae09 \ud3b8\uc9d1\uae30\ub97c \uc0ac\uc6a9\ud55c\ub2e4\uba74, \uc774 \ubb38\uc81c\ub294 XML\ub85c \uc804\ud658\ub418\uba70, \uac04\ud3b8 \ud3b8\uc9d1\uae30 \uc778\ud130\ud398\uc774\uc2a4\ub85c \ub2e4\uc2dc \ub3cc\uc544\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \n\uace0\uae09 \ud3b8\uc9d1\uae30\uc5d0\uc11c \uc774 \ubb38\uc81c\ub97c XML\ub85c \uc804\ud658\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?", 
    "Image": "\uc774\ubbf8\uc9c0", 
    "Image (Ctrl+G)": "\uc774\ubbf8\uc9c0 (Ctrl+G)", 
    "Image Upload Error": "\uc774\ubbf8\uc9c0 \uc5c5\ub85c\ub4dc \uc624\ub958", 
    "In Progress": "\uc9c4\ud589 \uc911", 
    "Insert Hyperlink": "\ud558\uc774\ud37c\ub9c1\ud06c \uc0bd\uc785", 
    "Instructor": "\uad50\uc218\uc790", 
    "Italic (Ctrl+I)": "\uae30\uc6b8\uc784 (Ctrl+I)", 
    "KB": "KB", 
    "Language": "\uc5b8\uc5b4", 
    "Less": "\uc801\uac8c", 
    "Linking": "\uc5f0\uacb0\ud558\uae30", 
    "Links are generated on demand and expire within 5 minutes due to the sensitive nature of student information.": "\uc694\uccad\uc5d0 \uc758\ud574 \uc0dd\uc131\ub41c \ub9c1\ud06c\ub294 \ud559\uc2b5\uc790 \uc815\ubcf4 \ubcf4\ud638\ub97c \uc704\ud574  5\ubd84 \ub0b4\uc5d0 \uc18c\uba78\ub429\ub2c8\ub2e4.", 
    "List item": "\ubb38\ub2e8\ubc88\ud638", 
    "Load all responses": "\ubaa8\ub4e0 \ub2f5\ubcc0 \ub85c\ub4dc\ud558\uae30", 
    "Loading": "\ub85c\ub529", 
    "Loading content": "\ucf58\ud150\uce20 \ub85c\ub529\uc911", 
    "Loading more threads": "\ub2e4\ub978 \uac8c\uc2dc\ubb3c \ucd94\uac00 \ub85c\ub529\uc911", 
    "Loading your courses": "\uac15\uc88c\ub97c \ubd88\ub7ec\uc624\uace0 \uc788\uc2b5\ub2c8\ub2e4.", 
    "Location in Course": "\uac15\uc88c\uc758 \uc704\uce58", 
    "Loud": "\ud06c\uac8c", 
    "Low": "\ub0ae\uac8c", 
    "MB": "MB", 
    "Mark enrollment code as unused": "\uc0ac\uc6a9\ub418\uc9c0 \uc54a\uc740 \uc218\uac15 \uc2e0\uccad \ucf54\ub4dc\ub97c \ud45c\uc2dc\ud558\uc138\uc694.", 
    "Markdown Editing Help": "Markdow \ud3b8\uc9d1 \ub3c4\uc6c0\ub9d0", 
    "Maximum": "\ucd5c\ub300", 
    "Message:": "\ubcf8\ubb38: ", 
    "Module state successfully deleted.": "\ubaa8\ub4c8 \uc0c1\ud0dc\uac00 \uc131\uacf5\uc801\uc73c\ub85c \uc0ad\uc81c\ub418\uc5c8\uc2b5\ub2c8\ub2e4.", 
    "More": "\ub354\ubcf4\uae30", 
    "Mute": "\uc74c\uc18c\uac70", 
    "Muted": "\uc74c\uc18c\uac70", 
    "My Notes": "\ub0b4 \ub178\ud2b8", 
    "New Address": "\uc0c8 \uc8fc\uc18c", 
    "No Content Group": "\ucf58\ud150\uce20 \uadf8\ub8f9 \uc5c6\uc74c", 
    "No Flash Detected": "\ud50c\ub798\uc2dc \ubbf8\uac10\uc9c0", 
    "No Webcam Detected": "\uc6f9\ucea0 \ubbf8\uac10\uc9c0", 
    "No results found for \"%(query_string)s\". Please try searching again.": "\"%(query_string)s\"\ub85c \uac80\uc0c9\ub41c \uacb0\uacfc\uac00 \uc5c6\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uac80\uc0c9\ud558\uc138\uc694.", 
    "No tasks currently running.": "\uc791\uc5c5\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.", 
    "Notes hidden": "\uac10\ucdb0\uc9c4 \ub178\ud2b8", 
    "Notes visible": "\ubcfc \uc218 \uc788\ub294 \ub178\ud2b8", 
    "Number Sent": "\ubcf4\ub0b8 \ud69f\uc218", 
    "Number of Students": "\ud559\uc2b5\uc790 \uc218 ", 
    "Numbered List (Ctrl+O)": "\ubb38\ub2e8 \ubc88\ud638 (Ctrl+O)", 
    "OK": "\ud655\uc778", 
    "Only properly formatted .csv files will be accepted.": "\uc801\ud569\ud55c .csv \ud30c\uc77c\ub9cc \uc62c\ub9b4 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ", 
    "Order No.": "\uc8fc\ubb38 \ubc88\ud638", 
    "Password": "\ube44\ubc00\ubc88\ud638", 
    "Password reset email sent. Follow the link in the email to change your password.": "\ube44\ubc00\ubc88\ud638\ub97c \uc7ac\uc124\uc815\ud558\uae30 \uc704\ud55c \uc774\uba54\uc77c\uc744 \ubcf4\ub0c8\uc2b5\ub2c8\ub2e4.  \ube44\ubc00\ubc88\ud638\ub97c \ubcc0\uacbd\ud558\uae30 \uc704\ud574 \uc774\uba54\uc77c\uc5d0 \uc788\ub294 \ub9c1\ud06c\ub97c \ud074\ub9ad\ud558\uc138\uc694.", 
    "Pause": "\uc77c\uc2dc\uc815\uc9c0", 
    "Photo Captured successfully.": "\uc0ac\uc9c4\uc774 \uc131\uacf5\uc801\uc73c\ub85c \ucea1\uccd0\ub418\uc5c8\uc2b5\ub2c8\ub2e4.", 
    "Placeholder": "\ud50c\ub808\uc774\uc2a4\ud640\ub354", 
    "Play": "\uc7ac\uc0dd", 
    "Play video": "\ub3d9\uc601\uc0c1 \uc7ac\uc0dd\ud558\uae30", 
    "Please check your email to confirm the change": "\ubcc0\uacbd\uc744 \ud655\uc778\ud558\uae30 \uc704\ud574 \uc774\uba54\uc77c\uc744 \ud655\uc778\ud558\uc138\uc694.", 
    "Please enter a problem location.": "\ubb38\uc81c \uc704\uce58\ub97c \uc785\ub825\ud558\uc138\uc694.", 
    "Please enter a student email address or username.": "\ud559\uc2b5\uc790\uc758 \uc774\uba54\uc77c \uc8fc\uc18c\ub098 \uc544\uc774\ub514\ub97c \uc785\ub825\ud558\uc138\uc694.", 
    "Please enter a username or email.": "\uc544\uc774\ub514 \ub610\ub294 \uc774\uba54\uc77c\uc744 \uc785\ub825\ud558\uc138\uc694", 
    "Please enter a valid donation amount.": "\uc720\ud6a8\ud55c \uae30\ubd80 \uae08\uc561\uc744 \uc785\ub825\ud558\uc2ed\uc2dc\uc624.", 
    "Please enter a valid email address": "\uc720\ud6a8\ud55c \uc774\uba54\uc77c \uc8fc\uc18c\ub97c \uc785\ub825\ud558\uc138\uc694.", 
    "Please enter a valid password": "\uc720\ud6a8\ud55c \ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud558\uc138\uc694.", 
    "Please select a PDF file to upload.": "\uc5c5\ub85c\ub4dc\ud560 PDF \ud30c\uc77c\uc744 \uc120\ud0dd\ud558\uc138\uc694.", 
    "Please select a file in .srt format.": ".srt \ud30c\uc77c\uc744 \uc120\ud0dd\ud574 \uc8fc\uc138\uc694.", 
    "Please verify that you have uploaded a valid image (PNG and JPEG).": "\uc801\ud569\ud55c \uc774\ubbf8\uc9c0 \ud615\uc2dd(PNG \ubc0f JPEG)\uc778\uc9c0 \ud655\uc778\ud574 \uc8fc\uc2ed\uc2dc\uc624.", 
    "Please verify that your webcam is connected and that you have allowed your browser to access it.": "\uc6f9\ucea0\uc774 \uc5f0\uacb0\ub418\uc5b4 \uc788\ub294\uc9c0, \ube0c\ub77c\uc6b0\uc800\uac00 \uc561\uc138\uc2a4\ub97c \ud5c8\uc6a9\ud558\ub294\uc9c0 \ud655\uc778\ud558\uc138\uc694.", 
    "Preferred Language": "\uc120\ud638\ud558\ub294 \uc5b8\uc5b4", 
    "Prevent students from generating certificates in this course?": "\ud559\uc2b5\uc790\uc758 \uc774\uc218\uc99d \uc0dd\uc131\uc744 \uc81c\ud55c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?", 
    "Professional Education": "\uc804\ubb38 \uad50\uc721 \uacfc\uc815", 
    "Professional Education Verified Certificate": "\uc804\ubb38 \uacfc\uc815 \uc774\uc218\uc99d", 
    "Public": "\uacf5\uac1c", 
    "Reason field should not be left blank.": "\uc774\uc720\ub97c \uc785\ub825\ud558\ub294 \ud544\ub4dc\ub294 \ube44\uc6cc\ub458 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.", 
    "Recent Activity": "\ucd5c\uadfc \ud65c\ub3d9", 
    "Redo (Ctrl+Shift+Z)": "\ub2e4\uc2dc\uc2e4\ud589 (Ctrl+Shift+Z)", 
    "Redo (Ctrl+Y)": "\ub2e4\uc2dc\uc2e4\ud589 (Ctrl+Y)", 
    "Removal is in progress. To avoid errors, stay on this page until the process is complete.": "\uc0ad\uc81c\uac00 \uc9c4\ud589 \uc911\uc785\ub2c8\ub2e4. \uc624\ub958 \ubc1c\uc0dd\uc744 \ubc29\uc9c0\ud558\uae30 \uc704\ud574 \uc644\ub8cc\ub420 \ub54c\uae4c\uc9c0 \ubcf8 \ud398\uc774\uc9c0\uc5d0 \uba38\ubb3c\ub7ec \uc8fc\uc2ed\uc2dc\uc624. ", 
    "Remove": "\uc81c\uac70", 
    "Removing": "\uc81c\uac70\ud558\uae30", 
    "Reply": "\ub2f5\uae00", 
    "Report annotation as inappropriate or offensive.": "\ubd80\uc801\uc808\ud55c \uc8fc\uc11d\uc73c\ub85c \uc2e0\uace0\ud569\ub2c8\ub2e4.", 
    "Requester": "\uc694\uccad\uc790", 
    "Reset Password": "\ube44\ubc00\ubc88\ud638 \uc7ac\uc124\uc815", 
    "Reset my password": "\ube44\ubc00\ubc88\ud638 \uc7ac\uc124\uc815", 
    "Restore enrollment code": "\uc218\uac15\uc2e0\uccad \ucf54\ub4dc\ub97c \ubcf5\uad6c\ud558\uc138\uc694.", 
    "Review your info": "\uc785\ub825 \uc815\ubcf4\ub97c \ud655\uc778\ud558\uc138\uc694.", 
    "Revoke access": "\uc811\uadfc \uad8c\ud55c \ucde8\uc18c", 
    "Save": "\uc800\uc7a5", 
    "Save changes": "\ubcc0\uacbd\uc0ac\ud56d \uc800\uc7a5", 
    "Saved cohort": "\ud559\uc2b5 \uc9d1\ub2e8\uc774 \uc800\uc7a5\ub418\uc5c8\uc2b5\ub2c8\ub2e4.", 
    "Saving": "\uc800\uc7a5\uc911", 
    "Saving your email preference": "\uc6d0\ud558\ub294 \uc774\uba54\uc77c\uc744 \uc800\uc7a5\uc911\uc785\ub2c8\ub2e4. ", 
    "Search": "\uac80\uc0c9", 
    "Search Results": "\uac80\uc0c9 \uacb0\uacfc", 
    "See all teams in your course, organized by topic. Join a team to collaborate with other learners who are interested in the same topic as you are.": "\uac15\uc88c\uc5d0\uc11c \uc8fc\uc81c\ubcc4\ub85c \uc870\uc9c1\ub41c \ubaa8\ub4e0 \ud300\uc744 \ubcf4\uc138\uc694. \uad00\uc2ec\uc0ac\uac00 \uac19\uc740 \ub2e4\ub978 \ud559\uc2b5\uc790\ub4e4\uacfc \ud611\ub825\ud558\uae30 \uc704\ud574 \ud300\uc5d0 \ucc38\uc5ec\ud558\uc138\uc694.", 
    "Select a chapter": "chapter \uc120\ud0dd", 
    "Selected tab": "\uc120\ud0dd\ub41c \ud0ed", 
    "Sent By": "\ubcf4\ub0b8 \uc0ac\ub78c", 
    "Sent By:": "\ubcf4\ub0b4\ub294 \uc0ac\ub78c:", 
    "Sent To:": "\ubc1b\ub294\uc0ac\ub78c:", 
    "Sequence error! Cannot navigate to %(tab_name)s in the current SequenceModule. Please contact the course staff.": "Sequence error!  \ud604\uc7ac\uc758 SequenceModule\uc5d0\uc11c\ub294 %(tab_name)s \uc744 \ud0d0\uc0c9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uad00\ub9ac\uc790\uc5d0\uac8c \ubb38\uc758\ud558\uc138\uc694.", 
    "Settings": "\uc124\uc815", 
    "Short explanation": "\uc9e7\uc740 \uc124\uba85", 
    "Show Discussion": "\uac8c\uc2dc\ud310  \ubcf4\uae30", 
    "Show notes": "\ub178\ud2b8 \ubcf4\uc774\uae30", 
    "Showing all responses": "\ubaa8\ub4e0 \ub2f5\ubcc0 \ubcf4\uc5ec\uc8fc\uae30", 
    "Sign in": "\ub85c\uadf8\uc778", 
    "Skip": "\uac74\ub108\ub6f0\uae30", 
    "Speed": "\uc18d\ub3c4", 
    "Staff": "\uc6b4\uc601\ud300", 
    "Start": "\uc2dc\uc791", 
    "Start generating certificates for all students in this course?": "\ubcf8 \uac15\uc88c\uc758 \ubaa8\ub4e0 \ud559\uc2b5\uc790\ub97c \uc704\ud55c \uac15\uc88c \uc774\uc218\uc99d \uc0dd\uc131\uc744 \uc2dc\uc791\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?", 
    "Starts": "\uac1c\uac15\uc77c", 
    "State": "\uc0c1\ud0dc", 
    "Status": "\uc0c1\ud0dc", 
    "Subject": "\uc81c\ubaa9", 
    "Subject:": "\uc81c\ubaa9:", 
    "Submitted": "\uc81c\ucd9c\ud588\uc2b5\ub2c8\ub2e4.", 
    "Success": "\uc131\uacf5", 
    "Successfully deleted student state for user {user}": " {user} \ud559\uc2b5\uc790 \uc0c1\ud0dc \uc0ad\uc81c \uc131\uacf5", 
    "Successfully enrolled and sent email to the following users:": "\uc131\uacf5\uc801\uc73c\ub85c \ub4f1\ub85d\ud558\uace0, \ub2e4\uc74c \uc774\uc6a9\uc790\uc5d0\uac8c \uc774\uba54\uc77c\uc744 \ubc1c\uc1a1\ud588\uc2b5\ub2c8\ub2e4. ", 
    "Successfully enrolled the following users:": "\ub2e4\uc74c \uc774\uc6a9\uc790\ub4e4\uc744 \uc131\uacf5\uc801\uc73c\ub85c \ub4f1\ub85d\ud588\uc2b5\ub2c8\ub2e4.", 
    "Successfully rescored problem for user {user}": "{user} \uc774\uc6a9\uc790\uc758 \ubb38\uc81c\uac00 \uc7ac\ucc44\uc810 \ub418\uc5c8\uc2b5\ub2c8\ub2e4.", 
    "Successfully reset the attempts for user {user}": "{user} \uc774\uc6a9\uc790\uc758 \uc2dc\ub3c4\ub97c \ucd08\uae30\ud654 \ud558\uc600\uc2b5\ub2c8\ub2e4.", 
    "Successfully sent enrollment emails to the following users. They will be allowed to enroll once they register:": "\ub4f1\ub85d \uc774\uba54\uc77c\uc744 \ub2e4\uc74c \uc774\uc6a9\uc790\ub4e4\uc5d0\uac8c  \ubc1c\uc1a1\ud588\uc2b5\ub2c8\ub2e4. ", 
    "Successfully sent enrollment emails to the following users. They will be enrolled once they register:": "\ub2e4\uc74c \uc0ac\uc6a9\uc790\uc5d0\uac8c  \uc131\uacf5\uc801\uc73c\ub85c \ub4f1\ub85d \uc774\uba54\uc77c\uc744 \ubc1c\uc1a1\ud588\uc2b5\ub2c8\ub2e4. \uac00\uc785\uc2e0\uccad\ud558\uba74 \uac15\uc88c\uc5d0 \ub4f1\ub85d\uc774 \ub420 \uac83\uc785\ub2c8\ub2e4: ", 
    "Successfully unlinked.": "\uc131\uacf5\uc801 \uc5f0\uacb0\uc774 \ud574\uc81c\ub418\uc5c8\uc2b5\ub2c8\ub2e4.", 
    "Tags": "Tags", 
    "Tags:": "Tags:", 
    "Take Photo": "\uc0ac\uc9c4 \ucd2c\uc601", 
    "Take a photo of your ID": "\uc2e0\ubd84\uc99d \uc0ac\uc9c4\uc744 \ucc0d\uc5b4 \uc8fc\uc138\uc694.", 
    "Task ID": "\uc791\uc5c5 ID", 
    "Task Progress": "\uc791\uc5c5 \uc9c4\ud589\uc0c1\ud669", 
    "Task Status": "\uc791\uc5c5 \uc0c1\ud0dc", 
    "Task Type": "\uc791\uc5c5 \uc720\ud615", 
    "Task inputs": "\uc791\uc5c5 \uc785\ub825", 
    "Teams": "\ud300", 
    "Text": "Text", 
    "The cohort cannot be added": "\ud559\uc2b5 \uc9d1\ub2e8\uc774 \ucd94\uac00\ub420 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.", 
    "The cohort cannot be saved": "\ud559\uc2b5 \uc9d1\ub2e8\uc774 \uc800\uc7a5\ub420 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.", 
    "The data could not be saved.": "\uc790\ub8cc\uac00 \uc800\uc7a5\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4.", 
    "The email address you use to sign in. Communications from {platform_name} and your courses are sent to this address.": "\ub85c\uadf8\uc778\uc5d0 \uc0ac\uc6a9\ub418\ub294 \uc774\uba54\uc77c \uc8fc\uc18c\uc785\ub2c8\ub2e4. {platform_name}\uc640 \uc218\uac15\uc911\uc778 \uac15\uc88c\uc5d0\uc11c \uc774 \uc774\uba54\uc77c \uc8fc\uc18c\ub85c \uba54\uc77c\uc744 \ubc1c\uc1a1\ud569\ub2c8\ub2e4. ", 
    "The file must be at least {size} in size.": "\ud30c\uc77c\uc758 \ud06c\uae30\uac00 \uc801\uc5b4\ub3c4 {size} \uc5ec\uc57c \ud569\ub2c8\ub2e4. ", 
    "The file must be smaller than {size} in size.": "\ud30c\uc77c\uc758 \ud06c\uae30\uac00 {size} \ubcf4\ub2e4 \uc791\uc544\uc57c \ud569\ub2c8\ub2e4. ", 
    "The following email addresses and/or usernames are invalid:": "\ub2e4\uc74c\uc758 \uc774\uba54\uc77c \uc8fc\uc18c  \ub610\ub294 \uc544\uc774\ub514\ub294 \uc720\ud6a8\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. ", 
    "The following errors were generated:": "\ub2e4\uc74c \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4.", 
    "The following users are no longer enrolled in the course:": "\ub2e4\uc74c \uc0ac\uc6a9\uc790\ub4e4\uc740 \uc774 \uac15\uc88c\uc5d0 \ub354\uc774\uc0c1 \ub4f1\ub85d\ub418\uc5b4 \uc788\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4:", 
    "The following warnings were generated:": "\ub2e4\uc74c \uacbd\uace0\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4:", 
    "The grading process is still running. Refresh the page to see updates.": "\ucc44\uc810\uc774 \uc9c4\ud589\uc911\uc785\ub2c8\ub2e4. \uc5c5\ub370\uc774\ud2b8 \uacb0\uacfc\ub97c \ubcf4\uae30 \uc704\ud574 \ub2e4\uc2dc \ubd88\ub7ec\uc624\uae30\ub97c \ud558\uc2ed\uc2dc\uc624.", 
    "The name that identifies you throughout {platform_name}. You cannot change your username.": "{platform_name}\uc5d0\uc11c \uc4f0\uac8c \ub418\ub294 \uc774\ub984\uc785\ub2c8\ub2e4. \ubcc0\uacbd\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. ", 
    "The selected content group does not exist": "\uc120\ud0dd\ub41c \ucf58\ud150\uce20 \uadf8\ub8f9\uc774 \uc874\uc7ac\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.", 
    "The {cohortGroupName} cohort has been created. You can manually add students to this cohort below.": "{cohortGroupName} \ud559\uc2b5\uc9d1\ub2e8\uc774 \uc0dd\uc131\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \uc218\uc791\uc5c5\uc73c\ub85c \ud559\uc2b5\uc790\ub97c \ucd94\uac00\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ", 
    "There has been an error processing your survey.": "\uc124\ubb38\uc744 \ucc98\ub9ac\ud558\ub294 \ub3d9\uc548 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4.", 
    "There is no email history for this course.": "\uc774 \uac15\uc88c\uc5d0\ub294 \uba54\uc77c \uc804\uc1a1 \uae30\ub85d\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.", 
    "There was a problem creating the report. Select \"Create Executive Summary\" to try again.": "\ubcf4\uace0\uc11c\ub97c \uc0dd\uc131\ud558\ub294 \ub3d9\uc548 \ubb38\uc81c\uac00 \uc788\uc5c8\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud558\uae30 \uc704\ud574 Create Executive Summary\ub97c \uc120\ud0dd\ud558\uc138\uc694.", 
    "There was an error obtaining email content history for this course.": "\uc774 \uac15\uc88c\uc758 \uba54\uc77c \uc804\uc1a1 \uae30\ub85d\uc744 \uac00\uc838\uc624\ub294\ub370 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4.", 
    "There was an error obtaining email task history for this course.": "\uc774 \uac15\uc88c\uc758 \uc774\uba54\uc77c \ubc1c\uc1a1 \uae30\ub85d \uac00\uc838\uc624\uae30\uc5d0 \uc2e4\ud328\ud558\uc600\uc2b5\ub2c8\ub2e4.", 
    "There was an error, try searching again.": "\uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uac80\uc0c9\ud558\uc138\uc694.", 
    "These users were not added as beta testers:": "\uc774 \uc774\uc6a9\uc790\ub4e4\uc740  \ubca0\ud0c0\ud14c\uc2a4\ud130\ub85c \ucd94\uac00\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4.", 
    "These users were not affiliated with the course so could not be unenrolled:": "\uc774 \uc0ac\uc6a9\uc790\ub4e4\uc740 \uc774 \uac15\uc88c\uc640 \uad00\ub828\uc5c6\uc73c\ubbc0\ub85c \uc218\uac15\ucde8\uc18c\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.", 
    "These users were not removed as beta testers:": "\uc774 \uc774\uc6a9\uc790\ub4e4\uc740 \ubca0\ud0c0\ud14c\uc2a4\ud130\uc5d0\uc11c \uc0ad\uc81c\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4.", 
    "These users were successfully added as beta testers:": "\uc774 \uc774\uc6a9\uc790\ub4e4\uc774 \uc131\uacf5\uc801\uc73c\ub85c \ubca0\ud0c0\ud14c\uc2a4\ud130\ub85c \ucd94\uac00\ub418\uc5c8\uc2b5\ub2c8\ub2e4.", 
    "These users were successfully removed as beta testers:": "\uc774 \uc774\uc6a9\uc790\ub4e4\uc774 \uc131\uacf5\uc801\uc73c\ub85c \ubca0\ud0c0\ud14c\uc2a4\ud130\uc5d0\uc11c \uc0ad\uc81c\ub418\uc5c8\uc2b5\ub2c8\ub2e4.", 
    "These users will be allowed to enroll once they register:": "\uc774 \uc0ac\uc6a9\uc790\ub4e4\uc740 \ub4f1\ub85d\ud558\uba74 \ubc14\ub85c \uc218\uac15\uc2e0\uccad\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ", 
    "These users will be enrolled once they register:": "\uac00\uc785 \uc2e0\uccad\ud558\uba74 \uac15\uc88c\uc5d0 \ub4f1\ub85d\uc774 \ub420 \uac83\uc785\ub2c8\ub2e4: ", 
    "This annotation has %(count)s flag.": [
      "\uc774 \uc8fc\uc11d\uc740 %(count)s \ud50c\ub798\uadf8\uac00 \uc788\uc2b5\ub2c8\ub2e4."
    ], 
    "This browser cannot play .mp4, .ogg, or .webm files.": "\uc774 \ube0c\ub77c\uc6b0\uc800\ub294 .mp4, .ogg, \ub610\ub294 .webm file\uc744 \uc7ac\uc0dd\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.", 
    "Time Sent": "\ubcf4\ub0b8 \uc2dc\uac04", 
    "Time Sent:": "\ubcf4\ub0b8 \uc2dc\uac04:", 
    "Try using a different browser, such as Google Chrome.": "\uad6c\uae00 Chrome \ub4f1 \ub2e4\ub978 \ube0c\ub77c\uc6b0\uc800\ub97c \uc0ac\uc6a9\ud558\uc138\uc694.", 
    "Undo (Ctrl+Z)": "\ub418\ub3cc\ub9ac\uae30 (Ctrl+Z)", 
    "Unknown": "\uc54c \uc218 \uc5c6\uc74c", 
    "Unlinking": "\uc5f0\uacb0 \ud574\uc81c\ud558\uae30", 
    "Unmute": "\uc74c\uc18c\uac70 \ud574\uc81c", 
    "Updating with latest library content": "\ucd5c\uc2e0 \ucf58\ud150\uce20 \ubcf4\uad00\ud568\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8", 
    "Upload File": "\ud30c\uc77c \uc5c5\ub85c\ub4dc", 
    "Upload File and Assign Students": "\ud30c\uc77c \uc5c5\ub85c\ub4dc \ubc0f \ud559\uc2b5\uc790 \ud560\ub2f9\ud558\uae30", 
    "Upload New File": "\ud30c\uc77c \uc5c5\ub85c\ub4dc", 
    "Upload an image": "\uc774\ubbf8\uc9c0 \uc5c5\ub85c\ub4dc", 
    "Upload is in progress. To avoid errors, stay on this page until the process is complete.": "\uc5c5\ub85c\ub4dc\uac00 \uc9c4\ud589 \uc911\uc785\ub2c8\ub2e4. \uc624\ub958 \ubc1c\uc0dd\uc744 \ubc29\uc9c0\ud558\uae30 \uc704\ud574 \uc644\ub8cc\ub420 \ub54c\uae4c\uc9c0 \ubcf8 \ud398\uc774\uc9c0\uc5d0 \uba38\ubb3c\ub7ec \uc8fc\uc2ed\uc2dc\uc624", 
    "Upload signature image.": "\uc11c\uba85 \uc774\ubbf8\uc9c0 \uc5c5\ub85c\ub4dc\ud558\uae30", 
    "Uploading": "\uc5c5\ub85c\ub4dc \uc911", 
    "User": "\uc774\uc6a9\uc790", 
    "Username": "\uc544\uc774\ub514", 
    "Users": "\uc774\uc6a9\uc790", 
    "Users must create and activate their account before they can be promoted to beta tester.": "\uc774\uc6a9\uc790\ub294 \ubca0\ud0c0\ud14c\uc2a4\ud130\ub85c \ub4f1\ub85d\ub418\uae30 \uc804\uc5d0 \uacc4\uc815\uc744 \uc0dd\uc131\ud558\uace0 \ud65c\uc131\ud654\ud574\uc57c \ud569\ub2c8\ub2e4.", 
    "Validation Error": "\uc720\ud6a8\uc131 \uc5d0\ub7ec", 
    "Verified Certificate": "\uc778\uc99d \uc774\uc218\uc99d", 
    "Verified Certificate upgrade": "\uc778\uc99d \uc774\uc218\uc99d \uc5c5\uadf8\ub808\uc774\ub4dc\ud558\uae30", 
    "Very loud": "\ub9e4\uc6b0 \ud06c\uac8c", 
    "Very low": "\ub9e4\uc6b0 \ub0ae\uac8c", 
    "Video": "\ub3d9\uc601\uc0c1", 
    "Video Capture Error": "\ub3d9\uc601\uc0c1 \ucea1\uccd0 \uc624\ub958", 
    "Video ended": "\ub3d9\uc601\uc0c1 \ub05d\ub0a8", 
    "Video position": "\ub3d9\uc601\uc0c1 \uc704\uce58", 
    "View": "\ubcf4\uae30", 
    "View %(span_start)s %(team_name)s %(span_end)s": "%(span_start)s %(team_name)s %(span_end)s \ubcf4\uae30", 
    "View Teams in the %(topic_name)s Topic": "%(topic_name)s \uc8fc\uc81c\uc758 \ud300 \ubcf4\uae30", 
    "View all errors": "\ubaa8\ub4e0 \uc624\ub958 \ubcf4\uae30", 
    "Viewing %s course": [
      "%s \uac15\uc88c \ubcf4\uae30"
    ], 
    "Volume": "\ubcfc\ub968", 
    "Warnings": "\uacbd\uace0!", 
    "We couldn't find any results for \"%s\".": "\"%s\"\ub97c \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. ", 
    "We weren't able to send you a password reset email.": "\uadc0\ud558\uc5d0\uac8c \ube44\ubc00\ubc88\ud638 \uc7ac\uc124\uc815 \uc774\uba54\uc77c\uc744 \ubcf4\ub0bc \uc218 \uc5c6\uc5c8\uc2b5\ub2c8\ub2e4.", 
    "We've encountered an error. Refresh your browser and then try again.": "\uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4. \ud398\uc774\uc9c0\ub97c \uc0c8\ub85c\uace0\uce68\ud55c \ud6c4, \ub2e4\uc2dc \uc2dc\ub3c4\ud558\uc138\uc694. ", 
    "Webcam": "\uc6f9\ucea0", 
    "Year of Birth": "\ucd9c\uc0dd\uc5f0\ub3c4", 
    "You currently have no cohorts configured": "\uc124\uc815\ub41c \ud559\uc2b5 \uc9d1\ub2e8\uc774 \ud604\uc7ac \uc5c6\uc2b5\ub2c8\ub2e4.", 
    "You did not select a content group": "\ucf58\ud150\uce20 \uadf8\ub8f9\uc744 \uc120\ud0dd\ud558\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4. ", 
    "You don't seem to have Flash installed. Get Flash to continue your verification.": "Flash\uac00 \uc124\uce58\ub418\uc5b4 \uc788\uc9c0 \uc54a\uc740 \uac83 \uac19\uc2b5\ub2c8\ub2e4. Flash \uc124\uce58 \ud6c4 \uacc4\uc18d \uc9c4\ud589\ud558\uc138\uc694.", 
    "You don't seem to have a webcam connected.": "\uc6f9\ucea0\uc774 \uc5f0\uacb0\ub418\uc9c0 \uc54a\uc740 \uac83 \uac19\uc2b5\ub2c8\ub2e4.", 
    "You have already reported this annotation.": "\uc774 \uc8fc\uc11d\uc740 \uc774\ubbf8 \uc2e0\uace0\ub418\uc5c8\uc2b5\ub2c8\ub2e4.", 
    "You must sign out and sign back in before your language changes take effect.": "\uc5b8\uc5b4\uac00 \ubc14\ub00c\uc5b4\uc84c\ub294\uc9c0 \ud655\uc778\ud558\uae30 \uc704\ud574 \ub85c\uadf8\uc544\uc6c3 \ud558\uace0 \ub2e4\uc2dc \ub85c\uadf8\uc778 \ud558\uc138\uc694.", 
    "You must specify a name": "\uc774\ub984\uc744 \uba85\uc2dc\ud574\uc57c \ud569\ub2c8\ub2e4.", 
    "You must specify a name for the cohort": "\ud559\uc2b5 \uc9d1\ub2e8\uc758 \uc774\ub984\uc744 \uc785\ub825\ud574\uc57c \ud569\ub2c8\ub2e4.", 
    "You've made some changes": "\uc218\uc815 \uc644\ub8cc", 
    "Your changes have been saved.": "\ubcc0\uacbd\uc0ac\ud56d\uc774 \uc800\uc7a5\ub418\uc5c8\uc2b5\ub2c8\ub2e4.", 
    "Your changes will not take effect until you save your progress.": "\uc800\uc7a5\ud558\uae30 \uc804\uc5d0\ub294 \ubcc0\uacbd\uc0ac\ud56d\uc774 \uc801\uc6a9\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.", 
    "Your donation could not be submitted.": "\uae30\ubd80 \ucc98\ub9ac\uac00 \ub420 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.", 
    "Your file '{file}' has been uploaded. Allow a few minutes for processing.": "'{file}' \ud30c\uc77c\uc774 \uc5c5\ub85c\ub4dc \ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ucc98\ub9ac\ud558\ub294\ub370 \uc7a0\uc2dc \uc2dc\uac04\uc774 \ud544\uc694\ud569\ub2c8\ub2e4. ", 
    "Your message cannot be blank.": "\ub0b4\uc6a9\uc744 \uc785\ub825\ud574\uc57c \ud569\ub2c8\ub2e4.", 
    "Your message must have a subject.": "\uc81c\ubaa9\uc744 \uc785\ub825\ud574\uc57c \ud569\ub2c8\ub2e4.", 
    "Your post will be discarded.": "\uac8c\uc2dc\ubb3c\uc774 \uc0ad\uc81c\ub429\ub2c8\ub2e4.", 
    "Your upload of '{file}' failed.": "'{file}'\ud30c\uc77c \uc5c5\ub85c\ub4dc\ub97c \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4.", 
    "Your upload of '{file}' succeeded.": "'{file}'\ud30c\uc77c \uc5c5\ub85c\ub4dc\ub97c \uc131\uacf5\ud588\uc2b5\ub2c8\ub2e4.", 
    "[no tags]": "[no tags]", 
    "a day": "\ud558\ub8e8", 
    "about %d hour": [
      "\uc57d %d \uc2dc\uac04 \uc815\ub3c4"
    ], 
    "about a minute": "1\ubd84\uac00\ub7c9", 
    "about a month": "\uc57d 1\uac1c\uc6d4", 
    "about a year": "\uc57d 1\ub144 ", 
    "about an hour": "\uc57d \ud55c \uc2dc\uac04 \uc815\ub3c4", 
    "anonymous": "\uc775\uba85", 
    "answer": "\ub2f5", 
    "bytes": "bytes", 
    "correct": "\uc815\ub2f5\uc744 \uc785\ub825\ud558\uc138\uc694.", 
    "dragging": "\ub9c8\uc6b0\uc2a4\ub85c \ub04c\uace0 \uc624\uae30", 
    "dragging out of slider": "\uc2ac\ub77c\uc774\ub354 \ub2f9\uae30\uae30", 
    "dropped in slider": "\uc2ac\ub77c\uc774\ub354\uc5d0 \ub5a8\uc5b4\ud2b8\ub838\uc2b5\ub2c8\ub2e4.", 
    "dropped on target": "\ubaa9\ud45c\uc810\uc5d0 \ub5a8\uc5b4\ud2b8\ub838\uc2b5\ub2c8\ub2e4.", 
    "emphasized text": "\uac15\uc870\ub41c \ubb38\uc7a5", 
    "enter code here": "\ucf54\ub4dc \uc785\ub825\ud558\uc138\uc694", 
    "enter link description here": "\ub9c1\ud06c \uc124\uba85\uc744 \uc5ec\uae30\uc5d0 \uc785\ub825\ud558\uc138\uc694", 
    "incorrect": "\uc624\ub2f5\uc744 \uc785\ub825\ud558\uc138\uc694.", 
    "less than a minute": "\uc77c\ubd84 \uc774\ub0b4", 
    "name": "\uc774\ub984", 
    "strong text": "\uac15\ud558\uac8c", 
    "team count": "\ud300 \uc778\uc6d0 \uc218", 
    "\u2026": "\u2026"
  };

  django.gettext = function (msgid) {
    var value = django.catalog[msgid];
    if (typeof(value) == 'undefined') {
      return msgid;
    } else {
      return (typeof(value) == 'string') ? value : value[0];
    }
  };

  django.ngettext = function (singular, plural, count) {
    var value = django.catalog[singular];
    if (typeof(value) == 'undefined') {
      return (count == 1) ? singular : plural;
    } else {
      return value[django.pluralidx(count)];
    }
  };

  django.gettext_noop = function (msgid) { return msgid; };

  django.pgettext = function (context, msgid) {
    var value = django.gettext(context + '\x04' + msgid);
    if (value.indexOf('\x04') != -1) {
      value = msgid;
    }
    return value;
  };

  django.npgettext = function (context, singular, plural, count) {
    var value = django.ngettext(context + '\x04' + singular, context + '\x04' + plural, count);
    if (value.indexOf('\x04') != -1) {
      value = django.ngettext(singular, plural, count);
    }
    return value;
  };
  

  django.interpolate = function (fmt, obj, named) {
    if (named) {
      return fmt.replace(/%\(\w+\)s/g, function(match){return String(obj[match.slice(2,-2)])});
    } else {
      return fmt.replace(/%s/g, function(match){return String(obj.shift())});
    }
  };


  /* formatting library */

  django.formats = {
    "DATETIME_FORMAT": "Y\ub144 n\uc6d4 j\uc77c g:i A", 
    "DATETIME_INPUT_FORMATS": [
      "%Y-%m-%d %H:%M:%S", 
      "%Y-%m-%d %H:%M:%S.%f", 
      "%Y-%m-%d %H:%M", 
      "%Y-%m-%d", 
      "%m/%d/%Y %H:%M:%S", 
      "%m/%d/%Y %H:%M:%S.%f", 
      "%m/%d/%Y %H:%M", 
      "%m/%d/%Y", 
      "%m/%d/%y %H:%M:%S", 
      "%m/%d/%y %H:%M:%S.%f", 
      "%m/%d/%y %H:%M", 
      "%m/%d/%y", 
      "%Y\ub144 %m\uc6d4 %d\uc77c %H\uc2dc %M\ubd84 %S\ucd08", 
      "%Y\ub144 %m\uc6d4 %d\uc77c %H\uc2dc %M\ubd84"
    ], 
    "DATE_FORMAT": "Y\ub144 n\uc6d4 j\uc77c", 
    "DATE_INPUT_FORMATS": [
      "%Y-%m-%d", 
      "%m/%d/%Y", 
      "%m/%d/%y", 
      "%Y\ub144 %m\uc6d4 %d\uc77c"
    ], 
    "DECIMAL_SEPARATOR": ".", 
    "FIRST_DAY_OF_WEEK": "0", 
    "MONTH_DAY_FORMAT": "F\uc6d4 j\uc77c", 
    "NUMBER_GROUPING": "3", 
    "SHORT_DATETIME_FORMAT": "Y-n-j H:i", 
    "SHORT_DATE_FORMAT": "Y-n-j.", 
    "THOUSAND_SEPARATOR": ",", 
    "TIME_FORMAT": "A g:i", 
    "TIME_INPUT_FORMATS": [
      "%H:%M:%S", 
      "%H:%M:%S.%f", 
      "%H:%M", 
      "%H\uc2dc %M\ubd84 %S\ucd08", 
      "%H\uc2dc %M\ubd84"
    ], 
    "YEAR_MONTH_FORMAT": "Y\ub144 F\uc6d4"
  };

  django.get_format = function (format_type) {
    var value = django.formats[format_type];
    if (typeof(value) == 'undefined') {
      return format_type;
    } else {
      return value;
    }
  };

  /* add to global namespace */
  globals.pluralidx = django.pluralidx;
  globals.gettext = django.gettext;
  globals.ngettext = django.ngettext;
  globals.gettext_noop = django.gettext_noop;
  globals.pgettext = django.pgettext;
  globals.npgettext = django.npgettext;
  globals.interpolate = django.interpolate;
  globals.get_format = django.get_format;

}(this));

