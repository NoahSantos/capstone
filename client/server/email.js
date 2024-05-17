export async function sendEmail(animal){
    var recipientEmail = 'nsanto591@west-mec.org';
    var subject = 'Meeting for Adoption';
    var body = `Hi,\n\nI was interested in possibly adopting ${animal.name}. Would it be possible to schedule some sort of meeting, so I can meet ${animal.name}? Please contact me back at this email.`;

    var mailtoLink = 'mailto:' + recipientEmail + '?subject=' + encodeURIComponent(subject) + '&amp;body=' + encodeURIComponent(body);

    window.open(mailtoLink);
}