document.addEventListener("DOMContentLoaded", function () {
    const resumeForm = document.getElementById("resumeForm");
    const preview = document.getElementById("preview");

    resumeForm.addEventListener("submit", function (e) {
        e.preventDefault();
        preview.innerHTML = generateResume();
    });

    function generateResume() {
        const fullName = document.getElementById("fullName").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const address = document.getElementById("address").value;
        const summary = document.getElementById("summary").value;
        const educationItems = document.querySelectorAll(".education");
        const experienceItems = document.querySelectorAll(".experience");

        let resumeHTML = `
            <h3>${fullName}</h3>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <p>Address: ${address}</p>
            <p>Summary: ${summary}</p>
        `;

        resumeHTML += "<h3>Education:</h3>";
        educationItems.forEach((item) => {
            const school = item.querySelector(".school").value;
            const degree = item.querySelector(".degree").value;
            const eduDate = item.querySelector(".eduDate").value;

            resumeHTML += `
                <div class="added-item">
                    <p>School/University: ${school}</p>
                    <p>Degree: ${degree}</p>
                    <p>Graduation Date: ${eduDate}</p>
                </div>
            `;
        });

        resumeHTML += "<h3>Experience:</h3>";
        experienceItems.forEach((item) => {
            const jobTitle = item.querySelector(".jobTitle").value;
            const company = item.querySelector(".company").value;
            const expDate = item.querySelector(".expDate").value;

            resumeHTML += `
                <div class="added-item">
                    <p>Job Title: ${jobTitle}</p>
                    <p>Company: ${company}</p>
                    <p>Employment Period: ${expDate}</p>
                </div>
            `;
        });

        return resumeHTML;
    }
});
