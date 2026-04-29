import { state } from '../services/dataStore.js';
import { displayYear, displayDept, displayChannelLabel } from '../utils/helpers.js';
import { openDetailModal } from './modals.js';

export function setActiveChannel(channelId) {
  state.activeChannel = channelId;

  document.querySelectorAll("#channel-list .channel").forEach((item) => {
    if (item.getAttribute("data-channel") === channelId) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });

  document.getElementById("post-channel").value = channelId;
  document.getElementById("posts-title").textContent = `Recent posts – # ${displayChannelLabel(channelId)}`;
  document.getElementById("active-channel-label").textContent = displayChannelLabel(channelId);

  refreshPostsView();
}

export function handleNewPost(e) {
  e.preventDefault();

  if (!state.currentUser) return;

  const content = document.getElementById("post-content").value.trim();
  const channel = document.getElementById("post-channel").value;
  const msg = document.getElementById("post-message");

  if (!content) {
    msg.textContent = "Post cannot be empty.";
    msg.style.color = "red";
    return;
  }

  const newPost = {
    id: Date.now().toString(),
    content,
    created_at: new Date().toISOString(),
    channel_id: channel,
    user: { ...state.currentUser },
    replies: [],
    reactions: {}
  };

  state.posts.push(newPost);
  document.getElementById("post-content").value = "";
  msg.textContent = "Post added successfully!";
  msg.style.color = "limegreen";

  const emptyState = document.getElementById("posts-empty");
  if (emptyState) emptyState.style.display = "none";

  refreshPostsView();
  
  // Clear success message after 3 seconds
  setTimeout(() => {
    msg.textContent = "";
  }, 3000);
}

export function refreshPostsView() {
  const container = document.getElementById("posts-container");
  const emptyState = document.getElementById("posts-empty");

  container.innerHTML = "";

  const channelPosts = state.posts
    .filter((p) => p.channel_id === state.activeChannel)
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

  if (channelPosts.length === 0) {
    emptyState.style.display = "block";
    return;
  }

  emptyState.style.display = "none";

  channelPosts.forEach((post) => {
    const card = document.createElement("div");
    card.className = "post-card";
    card.addEventListener("click", () => openDetailModal(post.id));

    const meta = document.createElement("div");
    meta.className = "post-meta";

    const channelTag = document.createElement("span");
    channelTag.className = "post-channel-tag";
    channelTag.textContent = `# ${displayChannelLabel(post.channel_id)}`;

    meta.textContent =
      `${post.user.name} – ${displayYear(post.user.year)}, ` +
      `${displayDept(post.user.department)} – ${post.user.email} | ` +
      `${new Date(post.created_at).toLocaleString()}`;

    meta.appendChild(channelTag);

    const content = document.createElement("div");
    content.className = "post-content";
    content.textContent = post.content;

    const actions = document.createElement("div");
    actions.className = "post-actions";

    const replyCount = post.replies.length;
    const reactionCount = Object.values(post.reactions).reduce((sum, arr) => sum + arr.length, 0);

    actions.innerHTML = `
      <span class="post-action">💬 ${replyCount} reply(ies)</span>
      <span class="post-action">👍 ${reactionCount} reaction(s)</span>
    `;

    card.appendChild(meta);
    card.appendChild(content);
    card.appendChild(actions);
    container.appendChild(card);
  });
}
