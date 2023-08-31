import type {Struts1Html} from "../../index.js";
import {StringBuffer} from "../util/StringBuffer.js";
import {BaseHandlerTag} from "./BaseHandlerTag.js";

/**
 * <html:link>
 *
 * @see https://github.com/apache/struts1/blob/trunk/taglib/src/main/java/org/apache/struts/taglib/html/LinkTag.java
 */
export class LinkTag extends BaseHandlerTag<Struts1Html.LinkTagAttr> {
    protected attr: Struts1Html.LinkTagAttr;

    render() {
        const {attr} = this;

        const results = new StringBuffer();
        results.append("<a");
        results.attr("name", attr.name);
        results.attr("href", this.calculateURL(attr));
        results.attr("target", attr.target);
        results.attr("accesskey", attr.accesskey);
        results.attr("tabindex", attr.tabindex);
        results.append(this.prepareStyles());
        results.append(this.prepareEventHandlers());
        this.prepareOtherAttributes(results);
        results.append(">");

        results.append(this.getBody());

        results.append("</a>");

        return results.toString();
    }

    calculateURL(attr: Struts1Html.LinkTagAttr) {
        if (attr.action) {
            throw new Error(`Not supported: action="${attr.action}"`);
        }

        return attr.page;
    }
}
