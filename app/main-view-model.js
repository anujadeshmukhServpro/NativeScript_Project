const { Page } = require("@nativescript/core");

const Observable = require("@nativescript/core").Observable;

function getMessage(counter) {
    if (counter <= 0) {
        return " You unlocked the NativeScript clicker achievement!";
    } else {
        return `${counter} taps left`;
    }
}

function createViewModel() {
    const viewModel = new Observable();
    viewModel.counter = 4;
    viewModel.message = getMessage(viewModel.counter);

    const model = {
        user:{
        username: "admin",
        password: "admin"
    }
    }
    viewModel.onTapLogin = () => {
        viewModel.counter--;
        // viewModel.get.username
        // viewModel.get.password
    //    alert(viewModel.get.user.username) ;
        viewModel.set("message", getMessage(viewModel.counter));
    };

    viewModel.ontapSignIn = () => {
    }
    return viewModel;
}

exports.createViewModel = createViewModel;
