(() => {

    class Avenger {

/*        private name: string;
        private team: string;
        public realName?: string;*/
        static age: number = 35;


/*        constructor(name: string, team: string, realName: string) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }*/

        constructor(
            private name: string,
            private team: string,
            public realName?: string
        ) {}

    }

    const antMan: Avenger = new Avenger('AntMan', 'Team Cap', 'Scott Lang');
    console.log(antMan);

})();