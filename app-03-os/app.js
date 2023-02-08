const moduleOs = require('os');

console.log(moduleOs.hostname()); // Machine's name
console.log(moduleOs.platform()); // win32 (when my PC has Windows 11 installed)
console.log(moduleOs.homedir()); // C:\Users\abc.def => abc.def is Username
console.log(moduleOs.machine()); // x86_64
console.log(moduleOs.userInfo()); // =>
                                    /*
                                    {
                                        uid: -1,
                                        gid: -1,
                                        username: 'abc.def',
                                        homedir: 'C:\\Users\\abc.def',
                                        shell: null
                                    } 
                                    */
