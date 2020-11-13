function navigateToFeatured(args) {
    const button = args.object;
    const page = button.page;
    page.frame.navigate("featured-page");
}

function navigateToBrowse(args) {
    const button = args.object;
    const page = button.page;
    page.frame.navigate("browse-page");
}

function navigateToSearch(args) {
    const button = args.object;
    const page = button.page;
    page.frame.navigate("search-page");
}

exports.navigateToFeatured = navigateToFeatured;
exports.navigateToBrowse = navigateToBrowse;
exports.navigateToSearch = navigateToSearch;