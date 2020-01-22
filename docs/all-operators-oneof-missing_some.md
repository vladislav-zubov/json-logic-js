# missing_some Schema

```txt
http://jsonlogic.com/schemas/operators/accessor/missing_some.json#/oneOf/2
```

Takes a minimum number of data keys that are required, and an array of keys to search for (same format as var or missing). Returns an empty array if the minimum is met, or an array of the missing keys otherwise.


| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                               |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [all-operators.json\*](common/all-operators.json "open original schema") |

## 2 Type

`object` ([missing_some](all-operators-oneof-missing_some.md))

# missing_some Properties

| Property                      | Type    | Required | Nullable       | Defined by                                                                                                                                                |
| :---------------------------- | ------- | -------- | -------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [missing_some](#missing_some) | `array` | Required | cannot be null | [missing_some](missing_some-properties-missing_some.md "http&#x3A;//jsonlogic.com/schemas/operators/accessor/missing_some.json#/properties/missing_some") |

## missing_some




`missing_some`

-   is required
-   Type: an array where each item follows the corresponding schema in the following list:

    1.  [Need-Count](missing_some-properties-missing_some-items-need-count.md "check type definition")
    2.  [Var](variable-properties-var.md "check type definition")
-   cannot be null
-   defined in: [missing_some](missing_some-properties-missing_some.md "http&#x3A;//jsonlogic.com/schemas/operators/accessor/missing_some.json#/properties/missing_some")

### missing_some Type

an array where each item follows the corresponding schema in the following list:

1.  [Need-Count](missing_some-properties-missing_some-items-need-count.md "check type definition")
2.  [Var](variable-properties-var.md "check type definition")

### missing_some Constraints

**maximum number of items**: the maximum number of items for this array is: `2`

**minimum number of items**: the minimum number of items for this array is: `2`
