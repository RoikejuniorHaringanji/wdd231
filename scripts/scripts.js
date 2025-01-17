// Filter courses based on category
function filterCourses(category) {
  let courses = document.querySelectorAll('.course-box');
  courses.forEach(course => {
      if (category === 'all') {
          course.style.display = 'block';
      } else {
          course.style.display = course.classList.contains(category) ? 'block' : 'none';
      }
  });
}

// Highlight the active navigation link
function filterCourses(category) {
  let courses = document.querySelectorAll('.course-box');
  courses.forEach(course => {
      if (category === 'all') {
          course.style.display = 'block';
      } else {
          course.style.display = course.classList.contains(category) ? 'block' : 'none';
      }
  });
}
