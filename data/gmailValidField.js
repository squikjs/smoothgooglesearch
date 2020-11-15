const fields = [
 'inbox',
 'starred',
 'snoozed',
 'sent',
 'drafts',
 'imp',
 'scheduled',
 'chats',
 'all',
 'spam',
 'trash'
];
module.exports = {
    validation(field) {
        if (fields.includes(field)) {
            return true;
        }
        else return false;
    }
}