# APIs

This is a Node/Express/MongoDB REST API that uses JWT authentication. All endpoints are protected.

## Getting Started

```bash
  # root directory
  npm install
  npm run server # Runs on http://localhost:5000
```

# API Usage & Endpoints
[Postman Documentation Link](https://documenter.getpostman.com/view/13623630/TzsYN9ZW)


## Sample CSV
```txt
id,name,address,age
1,Jack Smith,Massachusetts,23
2,Adam Johnson,New York,27
3,Katherin Carter,Washington DC,26
4,Jack London,Nevada,33
5,Jason Bourne,California,36
```
### CSV to JSON Data
```json
[
  { _id: "1", name: "Jack Smith", address: "Massachusetts", age: "23" },
  { _id: "2", name: "Adam Johnson", address: "New York", age: "27" },
  {
    _id: "3",
    name: "Katherin Carter",
    address: "Washington DC",
    age: "26",
  },
  { _id: "4", name: "Jack London", address: "Nevada", age: "33" },
  { _id: "5", name: "Jason Bourne", address: "California", age: "36" },
];
```

