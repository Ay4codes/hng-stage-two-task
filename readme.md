# Project API Documentation

## Register a User

**Endpoint:** `POST /api/register`

Registers a new user.

### Request

`POST /api/register`
`Content-Type: application/json`

```json
{
    "fullname": "Kanye West",
    "email": "west@gmail.com"
}
```
### Response

`Status: 200 OK`

```json
{
    "status": true,
    "message": "Registeration successful",
    "data": {
        "user": {
            "_id": "6500584c3462de8b124f9991",
            "fullname": "Kanye West",
            "email": "west@gmail.com",
            "created_at": "2023-09-12T12:23:40.774Z",
            "updated_at": "2023-09-12T12:23:40.776Z"
        }
    }
}
```

## Get All Users

**Endpoint:** `GET /api/users`

Retrieves a list of all users.

### Request

`GET /api/users`

### Response

```json
Status: 200 OK

{
    "status": true,
    "message": "All user fetched successfully",
    "data": {
        "users": [
            {
                "_id": "64ffd40d00c8aad69f4eb075",
                "fullname": "Elon Musk",
                "email": "elon@gmail.com",
                "created_at": "2023-09-12T02:59:25.940Z",
                "updated_at": "2023-09-12T02:59:25.940Z"
            },
            {
                "_id": "6500584c3462de8b124f9991",
                "fullname": "Kanye West",
                "email": "west@gmail.com",
                "created_at": "2023-09-12T12:23:40.774Z",
                "updated_at": "2023-09-12T12:23:40.776Z"
            }
        ]
    }
}
```

## Get User by ID, Email, or Name

**Endpoint:** `GET /api/users/:query`

Retrieves a user by ID, email, or name.

### Request

```json
GET /api/users/west@gmail.com
```

### Response

```json
Status: 200 OK

{
    "status": true,
    "message": "User fetched successfully",
    "data": {
        "user": {
            "_id": "6500584c3462de8b124f9991",
            "fullname": "Kanye West",
            "email": "west@gmail.com",
            "created_at": "2023-09-12T12:23:40.774Z",
            "updated_at": "2023-09-12T12:23:40.776Z"
        }
    }
}
```

## Update User

**Endpoint:** `PUT /api/users/:query`

Updates a user by ID, email, or name.

### Request

```json
PUT /api/users/johndoe@example.com
Content-Type: application/json

{
  "fullname": "Updated Name",
  "email": "updated@example.com"
}
```

### Response

```json
Status: 200 OK

{
    "status": true,
    "message": "User updated successfully",
    "data": {
        "user": {
            "_id": "6500584c3462de8b124f9991",
            "fullname": "Kanye West",
            "email": "west@gmail.com",
            "created_at": "2023-09-12T12:23:40.774Z",
            "updated_at": "2023-09-13T15:04:00.139Z"
        }
    }
}
```

## Delete User

**Endpoint:** `DELETE /api/users/:query`

Deletes a user by ID, email, or name.

### Request

```json
DELETE /api/users/west@gmail.com
```

### Response

```json
Status: 200 OK

{
    "status": true,
    "message": "User 'email: west@gmail.com' deleted successfully"
}
```