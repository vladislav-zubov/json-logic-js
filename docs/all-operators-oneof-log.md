# log Schema

```txt
http://jsonlogic.com/schemas/operators/misc/log.json#/oneOf/25
```

Logs the first value to console, then passes it through unmodified.


| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                               |
| :------------------ | ---------- | -------------- | ------------ | :---------------- | --------------------- | ------------------- | ------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [all-operators.json\*](common/all-operators.json "open original schema") |

## 25 Type

`object` ([log](all-operators-oneof-log.md))

## 25 Examples

```json
{
  "log": "apple"
}
```

# log Properties

| Property    | Type   | Required | Nullable       | Defined by                                                                                                            |
| :---------- | ------ | -------- | -------------- | :-------------------------------------------------------------------------------------------------------------------- |
| [log](#log) | Merged | Required | cannot be null | [log](one-or-more-args-oneof-single-array-all.md "http&#x3A;//jsonlogic.com/schemas/common/any.json#/properties/log") |

## log

Any valid JSON Logic data source.


`log`

-   is required
-   Type: merged type ([All](one-or-more-args-oneof-single-array-all.md))
-   cannot be null
-   defined in: [log](one-or-more-args-oneof-single-array-all.md "http&#x3A;//jsonlogic.com/schemas/common/any.json#/properties/log")

### log Type

merged type ([All](one-or-more-args-oneof-single-array-all.md))

one (and only one) of

-   one (and only one) of

    -   [var](all-operators-oneof-var.md "check type definition")
    -   [missing](all-operators-oneof-missing.md "check type definition")
    -   [missing_some](all-operators-oneof-missing_some.md "check type definition")
    -   [+](all-operators-oneof--4.md "check type definition")
    -   [/](all-operators-oneof--5.md "check type definition")
    -   [%](all-operators-oneof--2.md "check type definition")
    -   [\*](all-operators-oneof--3.md "check type definition")
    -   [-](all-operators-oneof--.md "check type definition")
    -   [all](all-operators-oneof-all.md "check type definition")
    -   [filter](var-oneof-filter.md "check type definition")
    -   [map](var-oneof-map.md "check type definition")
    -   [merge](var-oneof-merge.md "check type definition")
    -   [none](all-operators-oneof-none.md "check type definition")
    -   [reduce](var-oneof-reduce.md "check type definition")
    -   [some](all-operators-oneof-some.md "check type definition")
    -   [and](all-operators-oneof-and.md "check type definition")
    -   [Equal](all-operators-oneof-equal.md "check type definition")
    -   one (and only one) of

        -   [Untitled object in if](if-oneof-0.md "check type definition")
        -   [Untitled object in if](if-oneof-1.md "check type definition")
    -   [!](all-operators-oneof-.md "check type definition")
    -   [Not-Equal](all-operators-oneof-not-equal.md "check type definition")
    -   [!!](all-operators-oneof--1.md "check type definition")
    -   [or](all-operators-oneof-or.md "check type definition")
    -   [Strict Equal](all-operators-oneof-strict-equal.md "check type definition")
    -   [Strict Not-Equal](all-operators-oneof-strict-not-equal.md "check type definition")
    -   [in](all-operators-oneof-in.md "check type definition")
    -   [log](all-operators-oneof-log.md "check type definition")
    -   [method](all-operators-oneof-method.md "check type definition")
    -   [>](all-operators-oneof--8.md "check type definition")
    -   [>=](all-operators-oneof--9.md "check type definition")
    -   [&lt;](all-operators-oneof--6.md "check type definition")
    -   [&lt;=](all-operators-oneof--7.md "check type definition")
    -   [max](all-operators-oneof-max.md "check type definition")
    -   [min](all-operators-oneof-min.md "check type definition")
    -   [cat](all-operators-oneof-cat.md "check type definition")
    -   [substr](all-operators-oneof-substr.md "check type definition")
-   one (and only one) of

    -   [Untitled undefined type in All](all-types-oneof-0.md "check type definition")
    -   one (and only one) of

        -   [Empty object.](no-logic-object-oneof-empty-object.md "check type definition")
        -   all of

            -   [Untitled object in No-Logic](no-logic-object-oneof-non-logic-single-key-object-allof-0.md "check type definition")
            -   [Untitled undefined type in No-Logic](no-logic-object-oneof-non-logic-single-key-object-allof-1.md "check type definition")
        -   [Non-Logic multiple key object.](no-logic-object-oneof-non-logic-multiple-key-object.md "check type definition")
