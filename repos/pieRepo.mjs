import fs from "fs";
const FILE_NAME = "./assets/pies.json";

export const pieRepo = {
    get: (resolve, reject) => {
        fs.readFile(FILE_NAME, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(JSON.parse(data));
            }
        });
    },
    getById: (id, resolve, reject) => {
        fs.readFile(FILE_NAME, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(JSON.parse(data).find(p => p.id == id));
            }
        } );
    },
    search: (searchObject, resolve, reject) => {
        fs.readFile(FILE_NAME, (err, data) => {
            if (err) {
                reject(err)
            } else {
                let pies = JSON.parse(data);
                if (searchObject) {
                    pies = pies.filter(
                        p => (searchObject.id ? p.id == searchObject.id : true) &&
                            (searchObject.name ? p.name.toLowerCase().indexOf(
                                searchObject.name.toLowerCase()
                            ) >= 0 : true)
                    );
                }
                resolve(pies);
            }
        } )
    }
};