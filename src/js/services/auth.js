import { state } from './dataStore.js';
import { displayYear, displayDept } from '../utils/helpers.js';
import { setActiveChannel, refreshPostsView } from '../components/ui.js';

export function fakeLogin(name, email, year, department) {
  state.currentUser = { name, email, year, department };
  state.authToken = "dummy-token";

  document.getElementById("auth-section").style.display = "none";
  document.getElementById("app-section").style.display = "grid";

  const infoBox = document.getElementById("user-info");
  infoBox.innerHTML = `
    <strong>${state.currentUser.name}</strong>
    <span>${displayYear(state.currentUser.year)} – ${displayDept(state.currentUser.department)}</span>
    <span>${state.currentUser.email}</span>
  `;

  setActiveChannel("general");
  refreshPostsView();
}

export function handleSignup(e) {
  e.preventDefault();

  const name = document.getElementById("signup-name").value.trim();
  const email = document.getElementById("signup-email").value.trim();
  const year = document.getElementById("signup-year").value;
  const dept = document.getElementById("signup-dept").value;
  const password = document.getElementById("signup-password").value;

  const msg = document.getElementById("signup-message");

  if (!email.endsWith("@jerusalemengg.ac.in")) {
    msg.textContent = "Please use your official @jerusalemengg.ac.in email.";
    msg.style.color = "red";
    return;
  }

  if (!name || !year || !dept || !password) {
    msg.textContent = "Please fill in all fields.";
    msg.style.color = "red";
    return;
  }

  // Check if email already exists
  if (state.users.some((u) => u.email === email)) {
    msg.textContent = "This email is already registered.";
    msg.style.color = "red";
    return;
  }

  // Store user
  state.users.push({ name, email, year, dept, password });

  msg.textContent = "Account created successfully! Logging you in...";
  msg.style.color = "limegreen";

  // Auto-login after signup
  setTimeout(() => {
    fakeLogin(name, email, year, dept);
  }, 1500);
}

export function handleLogin(e) {
  e.preventDefault();

  const email = document.getElementById("login-email").value.trim();
  const password = document.getElementById("login-password").value;
  const msg = document.getElementById("login-message");

  if (!email.endsWith("@jerusalemengg.ac.in")) {
    msg.textContent = "Please use your official @jerusalemengg.ac.in email.";
    msg.style.color = "red";
    return;
  }

  if (!password) {
    msg.textContent = "Please enter your password.";
    msg.style.color = "red";
    return;
  }

  // Find user
  const user = state.users.find((u) => u.email === email && u.password === password);

  if (!user) {
    msg.textContent = "Email or password incorrect.";
    msg.style.color = "red";
    return;
  }

  msg.textContent = "";
  fakeLogin(user.name, user.email, user.year, user.dept);
}
