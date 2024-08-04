document.addEventListener('DOMContentLoaded', function () {
    // List of all editable elements by their IDs
    const editableElements = [
        'greeting', 'name', 'title', 'languages-title', 'language-1', 'language-2', 'language-3',
        'experience-title', 'experience-1-date', 'experience-1-badge', 'role-1', 'company-1', 'experience-1-item-1', 'experience-1-item-2',
        'experience-2-date', 'role-2', 'company-2', 'experience-2-item-1', 'experience-2-item-2', 'experience-2-item-3',
        'experience-3-date', 'role-3', 'company-3', 'experience-3-item-1', 'experience-3-item-2', 'experience-3-item-3',
        'tools-title', 'tools-category-1', 'tools-category-2', 'tools-category-3',
        'education-title', 'education-1-year', 'education-1-heart', 'education-1-title', 'education-1-details', 'education-1-institute',
        'education-2-year', 'education-2-title', 'education-2-details', 'education-2-institute',
        'education-3-year', 'education-3-title', 'education-3-details', 'education-3-institute',
        'interests-title', 'interest-1', 'interest-2', 'interest-3', 'interest-4', 'interest-5',
        'interest-6', 'interest-7', 'interest-8', 'interest-9', 'interest-10', 'lets-title', 'email'
    ];

    
    editableElements.forEach(id => {
        const savedContent = localStorage.getItem(id);
        if (savedContent) {
            document.getElementById(id).innerHTML = savedContent; 
        }
    });

  
    function showNotification(element) {
        const notification = document.getElementById('notification');
        const rect = element.getBoundingClientRect();
        
        notification.style.top = `${rect.top + window.scrollY - notification.offsetHeight - 10}px`;
        notification.style.left = `${rect.left + window.scrollX + (rect.width - notification.offsetWidth) / 2}px`;

        notification.classList.add('show');
        setTimeout(() => {
            notification.classList.remove('show');
        }, 2000); 
    }

    
    editableElements.forEach(id => {
        const element = document.getElementById(id);
        element.addEventListener('blur', () => {
            const originalContent = localStorage.getItem(id);
            const newContent = element.innerHTML;

            if (originalContent !== newContent) {
                localStorage.setItem(id, newContent);
                showNotification(element);
            }
        });
    });
});
