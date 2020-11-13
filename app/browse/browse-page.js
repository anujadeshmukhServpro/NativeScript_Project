function navigateToCategory(args) {
    const button = args.object;
    const page= button.page;
    page.frame.navigate("category-page");
}

exports.navigateToCategory = navigateToCategory;