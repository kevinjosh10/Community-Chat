import { state } from '../services/dataStore.js';
import { displayYear, displayDept, displayChannelLabel } from '../utils/helpers.js';
import { CONFIG } from '../config.js';

export function openPostsModal() {
  const backdrop = document.getElementById("posts-modal-backdrop");
  const container = document.getElementById("modal-posts-container");
  const title = document.getElementById("modal-title");

  title.textContent = `All posts – # ${displayChannelLabel(state.activeChannel)}`;
  container.innerHTML = "";

  const channelPosts = state.posts
    .filter((p) => p.channel_id === state.activeChannel)
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

  if (channelPosts.length === 0) {
    const emptyMsg = document.createElement("div");
    emptyMsg.className = "empty-state";
    emptyMsg.textContent = "No posts in this channel yet.";
    container.appendChild(emptyMsg);
  } else {
    channelPosts.forEach((post) => {
      const card = document.createElement("div");
      card.className = "modal-post-card";
      card.addEventListener("click", () => {
        document.getElementById("posts-modal-backdrop").style.display = "none";
        openDetailModal(post.id);
      });

      const meta = document.createElement("div");
      meta.className = "modal-post-meta";
      meta.textContent =
        `${post.user.name} – ${displayYear(post.user.year)}, ` +
        `${displayDept(post.user.department)} – ${post.user.email} | ` +
        `${new Date(post.created_at).toLocaleString()}`;

      const content = document.createElement("div");
      content.className = "modal-post-content";
      content.textContent = post.content;

      card.appendChild(meta);
      card.appendChild(content);
      container.appendChild(card);
    });
  }

  backdrop.style.display = "flex";
}

export function openDetailModal(postId) {
  const post = state.posts.find((p) => p.id === postId);
  if (!post) return;

  state.currentDetailPostId = postId;

  document.getElementById("detail-modal-title").textContent = "Post Details";
  document.getElementById("post-detail-modal-backdrop").style.display = "flex";

  refreshDetailModal();
}

export function refreshDetailModal() {
  const post = state.posts.find((p) => p.id === state.currentDetailPostId);
  if (!post) return;

  // Render main post
  const detailContainer = document.getElementById("detail-post-container");
  detailContainer.innerHTML = `
    <div class="detail-post-card">
      <div class="detail-post-meta">
        <strong>${post.user.name}</strong> – ${displayYear(post.user.year)}, ${displayDept(post.user.department)}
        <br/>
        <span style="font-size: 0.75rem; color: #6b7280;">
          ${post.user.email} | ${new Date(post.created_at).toLocaleString()}
        </span>
      </div>
      <div class="detail-post-content">
        ${post.content}
      </div>
    </div>
  `;

  // Render Reactions
  const reactionsContainer = document.getElementById("reactions-container");
  reactionsContainer.innerHTML = "";
  
  CONFIG.SUPPORTED_REACTIONS.forEach(emoji => {
    const btn = document.createElement("button");
    btn.className = "reaction-btn";
    btn.setAttribute("data-reaction", emoji);
    
    const count = post.reactions[emoji] ? post.reactions[emoji].length : 0;
    
    // Highlight if current user reacted
    const hasReacted = state.currentUser && post.reactions[emoji] && post.reactions[emoji].includes(state.currentUser.email);
    if (hasReacted) {
      btn.style.backgroundColor = "#e0f2fe";
      btn.style.borderColor = "#7dd3fc";
    }

    btn.innerHTML = `${emoji} <span class="reaction-count">${count}</span>`;
    
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      addReaction(emoji);
    });
    
    reactionsContainer.appendChild(btn);
  });

  // Render Replies
  const repliesContainer = document.getElementById("replies-container");
  const repliesEmpty = document.getElementById("replies-empty");
  
  repliesContainer.innerHTML = "";
  
  if (post.replies.length === 0) {
    repliesEmpty.style.display = "block";
  } else {
    repliesEmpty.style.display = "none";
    post.replies.forEach(reply => {
      const replyCard = document.createElement("div");
      replyCard.className = "reply-card";
      
      const meta = document.createElement("div");
      meta.className = "reply-meta";
      meta.innerHTML = `<strong>${reply.user.name}</strong> • ${new Date(reply.created_at).toLocaleString()}`;
      
      const content = document.createElement("div");
      content.className = "reply-content";
      content.textContent = reply.content;
      
      replyCard.appendChild(meta);
      replyCard.appendChild(content);
      repliesContainer.appendChild(replyCard);
    });
  }
}

export function addReaction(emoji) {
  if (!state.currentDetailPostId || !state.currentUser) return;

  const post = state.posts.find((p) => p.id === state.currentDetailPostId);
  if (!post) return;

  if (!post.reactions[emoji]) {
    post.reactions[emoji] = [];
  }

  const userEmail = state.currentUser.email;
  const alreadyReacted = post.reactions[emoji].some((u) => u === userEmail);

  if (alreadyReacted) {
    post.reactions[emoji] = post.reactions[emoji].filter((u) => u !== userEmail);
  } else {
    post.reactions[emoji].push(userEmail);
  }

  refreshDetailModal();
}

export function handleReply(e) {
  e.preventDefault();

  if (!state.currentDetailPostId || !state.currentUser) return;

  const replyContent = document.getElementById("reply-content").value.trim();

  if (!replyContent) return;

  const post = state.posts.find((p) => p.id === state.currentDetailPostId);
  if (!post) return;

  const reply = {
    id: Date.now().toString(),
    content: replyContent,
    created_at: new Date().toISOString(),
    user: { ...state.currentUser }
  };

  post.replies.push(reply);
  document.getElementById("reply-content").value = "";

  refreshDetailModal();
}
