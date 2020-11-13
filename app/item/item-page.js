function goBack(args) {
    const button = args.object;
    const page = button.page;
    page.frame.goBack();
}

function navigateToHub(args) {
    const button = args.object;
    const page = button.page;
    page.frame.navigate({
        moduleName: "hub-page",
        clearHistory: true
    });
}

exports.goBack = goBack;
exports.navigateToHub = navigateToHub;