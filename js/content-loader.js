// ============================================
// Content Loader - Dynamically loads projects, blog posts, and knowledge base
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
    loadBlogPosts();
    loadKnowledgeBase();
});

// ============================================
// Load Projects from JSON
// ============================================
async function loadProjects() {
    const projectsContainer = document.querySelector('.projects-grid');
    if (!projectsContainer) return;
    
    try {
        const response = await fetch('data/projects.json');
        const data = await response.json();
        
        // Clear existing placeholder cards
        projectsContainer.innerHTML = '';
        
        data.projects.forEach(project => {
            const card = createProjectCard(project);
            projectsContainer.appendChild(card);
        });
    } catch (error) {
        console.error('Error loading projects:', error);
        projectsContainer.innerHTML = '<p>Projects coming soon...</p>';
    }
}

function createProjectCard(project) {
    const article = document.createElement('article');
    article.className = 'project-card';
    
    const githubIcon = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
        </svg>
    `;
    
    article.innerHTML = `
        <div class="project-header">
            <span class="project-category">${project.category}</span>
            ${project.github_url ? `
            <div class="project-links">
                <a href="${project.github_url}" class="project-link" title="View Code" target="_blank" rel="noopener">
                    ${githubIcon}
                </a>
            </div>
            ` : ''}
        </div>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-description">${project.description}</p>
        <div class="project-tags">
            ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
    `;
    
    return article;
}

// ============================================
// Load Blog Posts from JSON
// ============================================
async function loadBlogPosts() {
    const blogContainer = document.querySelector('.blog-grid');
    if (!blogContainer) return;
    
    try {
        const response = await fetch('data/blog.json');
        const data = await response.json();
        
        // Clear existing placeholder cards
        blogContainer.innerHTML = '';
        
        data.posts.forEach(post => {
            const card = createBlogCard(post);
            blogContainer.appendChild(card);
        });
    } catch (error) {
        console.error('Error loading blog posts:', error);
        blogContainer.innerHTML = '<p>Blog posts coming soon...</p>';
    }
}

function createBlogCard(post) {
    const article = document.createElement('article');
    article.className = 'blog-card';
    
    article.innerHTML = `
        <div class="blog-meta">
            <span class="blog-date">${post.date_published}</span>
            <span class="blog-category">${post.category}</span>
            <span class="blog-date">${post.read_time}</span>
        </div>
        <h3 class="blog-title">${post.title}</h3>
        <p class="blog-excerpt">${post.excerpt}</p>
        <a href="pages/blog-post.html?slug=${post.title.toLowerCase().replace(/\s+/g, '-')}" class="blog-link">Read Post →</a>
    `;
    
    return article;
}

// ============================================
// Load Knowledge Base from JSON
// ============================================
async function loadKnowledgeBase() {
    const kbContainer = document.querySelector('.kb-categories');
    if (!kbContainer) return;
    
    try {
        const response = await fetch('data/knowledge.json');
        const data = await response.json();
        
        // Clear existing placeholder content
        kbContainer.innerHTML = '';
        
        data.categories.forEach(category => {
            const categoryDiv = createKnowledgeCategory(category);
            kbContainer.appendChild(categoryDiv);
        });
    } catch (error) {
        console.error('Error loading knowledge base:', error);
        kbContainer.innerHTML = '<p>Knowledge base coming soon...</p>';
    }
}

function createKnowledgeCategory(category) {
    const div = document.createElement('div');
    div.className = 'kb-category';
    
    div.innerHTML = `
        <h3>${category.icon} ${category.name}</h3>
        <ul class="kb-list">
            ${category.articles.map(article => `
                <li><a href="pages/article.html?slug=${article.slug}">${article.title}</a></li>
            `).join('')}
        </ul>
    `;
    
    return div;
}
