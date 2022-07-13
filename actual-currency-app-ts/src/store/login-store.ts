import { action, makeObservable, observable } from "mobx";

export class LoginStore {
    public userId: string;

    constructor() {
        makeObservable(this, {
            userId: observable,
            setUserId: action
        });
        this.userId = "";
    }

    public setUserId(userId: string) : void {
        this.userId = userId;
    }
}