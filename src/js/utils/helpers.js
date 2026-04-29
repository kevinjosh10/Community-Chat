export function displayYear(yearValue) {
  switch (yearValue) {
    case "1": return "1st Year";
    case "2": return "2nd Year";
    case "3": return "3rd Year";
    case "4": return "4th Year";
    default: return `Year ${yearValue}`;
  }
}

export function displayDept(dept) {
  const map = {
    "CSE": "CSE",
    "CSE-AIML": "CSE (AI & ML)",
    "CSE-CYBER": "CSE (Cyber Security)",
    "IT": "Information Technology",
    "CSBS": "Computer Science & Business System",
    "AI-DS": "Artificial Intelligence & Data Science",
    "ECE": "Electronics & Communication Engineering",
    "EEE": "Electrical & Electronics Engineering",
    "BME": "Biomedical Engineering",
    "CIVIL": "Civil Engineering",
    "ME-AE": "M.E. Applied Electronics",
    "ME-CSE": "M.E. Computer Science & Engineering",
    "ME-PED": "M.E. Power Electronics & Drives",
    "ME-CEM": "M.E. Construction Engg & Management",
    "MBA": "MBA",
    "MBA-HA": "MBA Hospital Administration"
  };
  return map[dept] || dept;
}

export function displayChannelLabel(channelId) {
  const map = {
    "general": "General",
    "hostel": "Hostel & Campus",
    "academics": "Academics & Exams",
    "career": "Internships & Careers",
    "events": "Clubs & Events",
    "market": "Buy & Sell"
  };
  return map[channelId] || channelId;
}
