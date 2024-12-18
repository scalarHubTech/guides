---
sidebar_position: 2
title: Request Idempotency
id: request idempotency
---

ScalarHub's API supports idempotency to allow safe request retries without causing unintended duplication of actions. For example, an `Idempotency-Key` ensures that creating a subscription will not accidentally create duplicate subscriptions if the request is retried. Idempotency is strongly recommended for `POST` and `PATCH` operations.`GET`, `PUT`, and `DELETE` operations are idempotent and do not require an explicit key.

Users can safely retry requests containing an `Idempotency-Key` within 48 hours. Once expired, retries with the same key may result in re-execution of side effects.

```http
POST /customers
Content-Type: application/json
Idempotency-Key: abc123
```

```json
{
    "name": "John Doe",
    "email": "john.doe@example.com"
}
```

## Response Format

```http
HTTP/1.1 201 Created
Content-Type: application/json
Idempotency-Key: abc123
Idempotent-Replayed: false
Location: /customers/12345
```

```json
{
    "id": "12345",
    "name": "John Doe",
    "email": "john.doe@example.com",
    "created_at": "2024-10-04T13:06:48.000Z",
    "updated_at": "2024-10-04T13:06:48.000Z",
    "status": "active"
}
```
The `Idempotency-Key` header reflects the key provided in the original request. The `Idempotent-Replayed` header is set to `false`, which indicates that the response is new and not a repeat of a previous one. This format allows the client to verify the successful creation of the customer, even if the original request is sent again with the same idempotency key.

## Generating Idempotency Keys

- **UUID (Universally Unique Identifier):** Use libraries or built-in functions in programming languages to generate a UUID.
- **Timestamp + Random String:** Combine the current timestamp with a random string to create a unique key.
- **Client-Specific Key:** If applicable, concatenate a user-specific identifier (like a user ID) with a timestamp to create a key unique to that user's action.

## Error Cases

When using idempotency keys, several error scenarios may arise:

- **Missing Idempotency Key** If a request is made without an `Idempotency-Key`, the server will process it usually, but subsequent requests with the same parameters will not be idempotent

```http
400 Bad Request: "Idempotency-Key header is missing."
```

- **Duplicate Idempotency Key**If the same `Idempotency-Key` is used for different operations, the server will respond based on the first request made with that key.
```http
409 Conflict: "This idempotency key has already been used." 
```

- **Expired Idempotency Key**

Server settings may set a specific expiration time for keys. Reusing a key after it has expired will be considered a new request.


```http
410 Gone: "The provided idempotency key has expired."
```

