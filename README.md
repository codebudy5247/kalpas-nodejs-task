# APIs

This is a Node/Express/MongoDB REST API that uses JWT authentication. All endpoints are protected.

## Getting Started

```bash
  # root directory
  npm install
  npm run server # Runs on http://localhost:5000
```

# API Usage & Endpoints

## Register a User [POST /api/auth]

- Request: Add user and request JSON web token

  - Headers

        Content-type: application/json

  - Body

            {
              "name": "aditya",
              "email": "aditya@example.com",
              "password": "123456"
            }

- Response: 200 (application/json)

  - Body

    "result": {
    "\_id": "60f83905c40775c93e54a93b",
    "email": "aditya1@example.com",
    "password": "$2a$12$Cco2Oy4ToWVmH9Zs9G5gA.noKRxZMo2LwYLHATS4fY4v8pQAFu6Q.",
    "name": "aditya1",
    "createdAt": "2021-07-21T15:11:01.724Z",
    "updatedAt": "2021-07-21T15:11:01.724Z",
    "\_\_v": 0
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkaXR5YTFAZXhhbXBsZS5jb20iLCJpZCI6IjYwZjgzOTA1YzQwNzc1YzkzZTU0YTkzYiIsImlhdCI6MTYyNjg4MDI2MSwiZXhwIjoxNjI2OTE5ODYxfQ.uO4JoGBZeRq6R2v0z7yjt7piObiBxhs18KDGXg7GqmI"
    

## Login with a User [POST /api/auth]

- Request: Login with credentials to recieve a JSON web token

  - Headers

        Content-type: application/json

  - Body

            {
              "email": "aditya@example.com",
              "password": "123456"
            }

- Response: 200 (application/json)

  - Body

        "result": {
    "\_id": "60f83905c40775c93e54a93b",
    "email": "aditya1@example.com",
    "password": "$2a$12$Cco2Oy4ToWVmH9Zs9G5gA.noKRxZMo2LwYLHATS4fY4v8pQAFu6Q.",
    "name": "aditya1",
    "createdAt": "2021-07-21T15:11:01.724Z",
    "updatedAt": "2021-07-21T15:11:01.724Z",
    "\_\_v": 0
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkaXR5YTFAZXhhbXBsZS5jb20iLCJpZCI6IjYwZjgzOTA1YzQwNzc1YzkzZTU0YTkzYiIsImlhdCI6MTYyNjg4MDI2MSwiZXhwIjoxNjI2OTE5ODYxfQ.uO4JoGBZeRq6R2v0z7yjt7piObiBxhs18KDGXg7GqmI"


## File Upload CSV[POST /api/uploadfile] 

- Response: 200 (application/json)
{
  "msg": "File uploaded/import successfully!",
  "file": {
    "fieldname": "uploadfile",
    "originalname": "customers.csv",
    "encoding": "7bit",
    "mimetype": "text/csv",
    "destination": "./uploads",
    "filename": "uploadfile_1626880557483.csv",
    "path": "uploads/uploadfile_1626880557483.csv",
    "size": 172
  }
}

## Sample CSV
```txt
id,name,address,age
1,Jack Smith,Massachusetts,23
2,Adam Johnson,New York,27
3,Katherin Carter,Washington DC,26
4,Jack London,Nevada,33
5,Jason Bourne,California,36
```

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

