# if Schema

```txt
https://raw.githubusercontent.com/vladislav-zubov/json-logic-js/master/schemas/operators/logic/if.json#/oneOf/0/items/0/oneOf/1
```

The if statement typically takes 3 arguments: a condition (if), what to do if it’s true (then), and what to do if it’s false (else), like: {"if" : [ true, "yes", "no" ]}.
If can also take more than 3 arguments, and will pair up arguments like if/then elseif/then elseif/then else.


| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                           |
| :------------------ | ---------- | -------------- | ----------------------- | :---------------- | --------------------- | ------------------- | ---------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [var.json\*](common/var.json "open original schema") |

## 1 Type

merged type ([if](var-oneof-0-items-0-oneof-if.md))

one (and only one) of

-   [Untitled object in if](if-oneof-0.md "check type definition")
-   [Untitled object in if](if-oneof-1.md "check type definition")

## 1 Examples

```json
{
  "if": [
    true,
    "yes",
    "no"
  ]
}
```

```json
{
  "if": [
    false,
    "yes",
    "no"
  ]
}
```

```json
{
  "if": [
    {
      "<": [
        {
          "var": "temp"
        },
        0
      ]
    },
    "freezing",
    {
      "<": [
        {
          "var": "temp"
        },
        100
      ]
    },
    "liquid",
    "gas"
  ]
}
```
