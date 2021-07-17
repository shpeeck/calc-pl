
  window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 500);
  }


const app = {
            data() {
                return {
                    // limit: "33",
                    show: false,
                    showOne: false,
                    limit: this.myLimit(),
                    curs: this.myCurs(),
                    message: "",
                    newLimit: "",
                    newCurs: "",
                    now: 0,
                    isActive: true,
                    isActiveCurs: true,
                    //arr: [],
                    arr: this.check(),
                    //arr: JSON.parse(localStorage.getItem("myBd")),
                }
            },
            methods: {
                addPrise() {
                    if (this.message != "") {
                        this.arr.push(parseFloat(this.message));
                        this.message = "";
                        localStorage.setItem("myBd", JSON.stringify(this.arr));
                        this.arr = JSON.parse(localStorage.getItem("myBd"));
                    }
                },
                summ(arr) {
                    let sum = 0;
                    for (let i = 0; i < this.arr.length; i++) {
                        sum += this.arr[i];
                    }
                    return this.now = sum
                },
                del(index) {
                    this.arr.splice(index, 1);
                    console.log(this.arr);
                    localStorage.setItem("myBd", JSON.stringify(this.arr));
                },
                check() {
                    if(JSON.parse(localStorage.getItem("myBd"))) {
                        return JSON.parse(localStorage.getItem("myBd"));
                    }else {
                        return [];
                    }
                },
                changeLimit() {
                    this.show = true
                    // this.isActive = false;
                },
                myLimit() {
                    if (localStorage.getItem("myLim")) {
                        return localStorage.getItem("myLim");
                    }else {
                        return 33;
                    }
                },
                addLimit() {
                    localStorage.setItem("myLim", this.newLimit);
                    this.newLimit = "";
                    // this.isActive = true;
                    this.show = false,
                    this.limit = this.myLimit();
                    console.log(111);
                },
                changeCurs() {
                    // this.isActiveCurs = false;
                    this.showOne = true
                },
                myCurs() {
                    if (localStorage.getItem("myCurs")) {
                        return localStorage.getItem("myCurs");
                    }else {
                        return 7.25;
                    }
                },
                addCurs() {
                    localStorage.setItem("myCurs", this.newCurs);
                    this.newCurs = "";
                    // this.isActiveCurs = true;
                    this.showOne = false
                    this.curs = this.myCurs();
                },
                clo() {
                    this.show = false,
                    this.showOne = false
                    // this.isActive = true;
                    // this.isActiveCurs = true;
                }
            }
        }

        Vue.createApp(app).mount('.app')

    