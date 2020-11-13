function navigateToItem(args) {
    const button = args.object;
    const page = button.page;
    page.frame.navigate("item-page");
}

exports.navigateToItem = navigateToItem;