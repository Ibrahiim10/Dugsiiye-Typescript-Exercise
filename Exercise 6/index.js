// #1 UserRole Enum Usage
var UserRole;
(function (UserRole) {
    UserRole["SuperAdmin"] = "superadmin";
    UserRole["Moderator"] = "moderator";
    UserRole["Viewer"] = "viewer";
})(UserRole || (UserRole = {}));
function canEdit(role) {
    return role !== UserRole.Viewer;
}
console.log(canEdit(UserRole.SuperAdmin));
console.log(canEdit(UserRole.Moderator));
console.log(canEdit(UserRole.Viewer));
// #2 Type Assertion with as
var btn = document.querySelector("button");
btn.disabled = true;
