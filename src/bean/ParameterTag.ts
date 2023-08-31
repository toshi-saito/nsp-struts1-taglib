import type {Struts1Bean} from "../../index.js";
import {TagSupport} from "../util/TagSupport.js";

/**
 * <bean:parameter>
 *
 * @see https://github.com/apache/struts1/blob/trunk/taglib/src/main/java/org/apache/struts/taglib/bean/ParameterTag.java
 */
export class ParameterTag extends TagSupport<Struts1Bean.ParameterTagAttr> {
    protected attr: Struts1Bean.ParameterTagAttr;

    render() {
        throw new Error("Not implemented: <bean:parameter>");
        return null as string; // TODO
    };
}
