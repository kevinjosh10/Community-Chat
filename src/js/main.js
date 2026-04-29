import { handleSignup, handleLogin } from './services/auth.js';
import { handleNewPost, setActiveChannel } from './components/ui.js';
import { openPostsModal, handleReply } from './components/modals.js';

document.addEventListener('DOMContentLoaded', () => {
  // Bind Auth
  document.getElementById("signup-form").addEventListener("submit", handleSignup);
  document.getElementById("login-form").addEventListener("submit", handleLogin);

  // Bind Post Creation
  document.getElementById("post-form").addEventListener("submit", handleNewPost);

  // Bind Channel Switching
  document.querySelectorAll("#channel-list .channel").forEach((item) => {
    item.addEventListener("click", () => {
      const channel = item.getAttribute("data-channel");
      setActiveChannel(channel);
    });
  });

  // Bind Modals
  document.getElementById("view-all-btn").addEventListener("click", openPostsModal);
  
  // Close Modals
  document.getElementById("modal-close-btn").addEventListener("click", () => {
    document.getElementById("posts-modal-backdrop").style.display = "none";
  });
  
  document.getElementById("posts-modal-backdrop").addEventListener("click", (e) => {
    if (e.target.id === "posts-modal-backdrop") {
      document.getElementById("posts-modal-backdrop").style.display = "none";
    }
  });
  
  document.getElementById("detail-modal-close-btn").addEventListener("click", () => {
    document.getElementById("post-detail-modal-backdrop").style.display = "none";
  });
  
  document.getElementById("post-detail-modal-backdrop").addEventListener("click", (e) => {
    if (e.target.id === "post-detail-modal-backdrop") {
      document.getElementById("post-detail-modal-backdrop").style.display = "none";
    }
  });

  // Bind Replies
  document.getElementById("reply-form").addEventListener("submit", handleReply);
});
