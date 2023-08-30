import type {NSP} from "nsp-server-pages";

export const logicTags: Struts1Logic.logicTags;

/**
 * logic
 * uri: http://struts.apache.org/tags-logic
 *
 * <p><strong>Note:  Some of the features in this taglib are also
 * available in the <a href="http://java.sun.com/products/jsp/jstl/">JavaServer Pages Standard Tag Library (JSTL)</a>.
 * The Struts team encourages the use of the standard tags over the Struts
 * specific tags when possible.</strong></p>
 * <p>This tag library contains tags that are useful in managing conditional
 * generation of output text, looping over object collections for
 * repetitive generation of output text, and application flow management.</p>
 * <p>For tags that do value comparisons (<code>equal</code>,
 * <code>greaterEqual</code>, <code>greaterThan</code>, <code>lessEqual</code>,
 * <code>lessThan</code>, <code>notEqual</code>), the following rules apply:</p>
 * <ul>
 * <li>The specified value is examined.  If it can be converted successfully
 * to a <code>double</code> or a <code>long</code>, it is assumed that the
 * ultimate comparison will be numeric (either floating point or integer).
 * Otherwise, a String comparison will be performed.</li>
 * <li>The variable to be compared to is retrieved, based on the selector
 * attribute(s) (<code>cookie</code>, <code>header</code>,
 * <code>name</code>, <code>parameter</code>, <code>property</code>)
 * present on this tag.  It will be converted to the appropriate type
 * for the comparison, as determined above.</li>
 * <li>If the specified variable or property returns null, it will be
 * coerced to a zero-length string before the comparison occurs.</li>
 * <li>The specific comparison for this tag will be performed, and the nested
 * body content of this tag will be evaluated if the comparison returns
 * a <code>true</code> result.</li>
 * </ul>
 * <p>For tags that do substring matching (<code>match</code>,
 * <code>notMatch</code>), the following rules apply:</p>
 * <ul>
 * <li>The specified variable is retrieved, based on the selector attribute(s)
 * (<code>cookie</code>, <code>header</code>, <code>name</code>,
 * <code>parameter</code>, <code>property</code>) present on this tag.
 * The variable is converted to a String, if necessary.</li>
 * <li>A request time exception will be thrown if the specified variable
 * cannot be retrieved, or has a null value.</li>
 * <li>The specified value is checked for existence as a substring of the
 * variable, in the position specified by the <code>location</code>
 * attribute, as follows:  at the beginning (if location is set to
 * <code>start</code>), at the end (if location is set to
 * <code>end</code>), or anywhere (if location is not specified).</li>
 * </ul>
 * <p>Many of the tags in this tag library will throw a
 * <code>JspException</code> at runtime when they are utilized incorrectly
 * (such as when you specify an invalid combination of tag attributes).  JSP
 * allows you to declare an "error page" in the <code><%@ page %></code>
 * directive.  If you wish to process the actual exception that caused the
 * problem, it is passed to the error page as a request attribute under key
 * <code>org.apache.struts.action.EXCEPTION</code>.</p>
 */
declare namespace Struts1Logic {
    type logicTags = {
        empty: NSP.TagFn<EmptyTagAttr>;
        equal: NSP.TagFn<EqualTagAttr>;
        forward: NSP.TagFn<ForwardTagAttr>;
        greaterEqual: NSP.TagFn<GreaterEqualTagAttr>;
        greaterThan: NSP.TagFn<GreaterThanTagAttr>;
        iterate: NSP.TagFn<IterateTagAttr>;
        lessEqual: NSP.TagFn<LessEqualTagAttr>;
        lessThan: NSP.TagFn<LessThanTagAttr>;
        match: NSP.TagFn<MatchTagAttr>;
        messagesNotPresent: NSP.TagFn<MessagesNotPresentTagAttr>;
        messagesPresent: NSP.TagFn<MessagesPresentTagAttr>;
        notEmpty: NSP.TagFn<NotEmptyTagAttr>;
        notEqual: NSP.TagFn<NotEqualTagAttr>;
        notMatch: NSP.TagFn<NotMatchTagAttr>;
        notPresent: NSP.TagFn<NotPresentTagAttr>;
        present: NSP.TagFn<PresentTagAttr>;
        redirect: NSP.TagFn<RedirectTagAttr>;
    };

    /**
     * <logic:empty>
     * org.apache.struts.taglib.logic.EmptyTag
     *
     * @description
     * <p><strong>
     * Evaluate the nested body content of this tag if the requested variable is
     * either null or an empty string.
     * </strong></p>
     * <p>This tag evaluates its nested body content only if the specified value
     * is either absent (i.e. <code>null</code>), an empty string (i.e. a
     * <code>java.lang.String</code> with a length of zero), or an empty
     * <code>java.util.Collection</code> or <code>java.util.Map</code> (tested by
     * the .isEmpty() method on the respective interface).</p>
     * <p>
     * <strong>JSTL</strong>:  The equivalent JSTL tag is <c:if> using the
     * <code>empty</code> operator.  For example,
     * <code>
     * <c:if test="${empty sessionScope.myBean.myProperty}">
     * do something
     * </c:if>
     * </code>
     * </p>
     * <dl><dt><b>Since:</b></dt>
     * <dd>Struts 1.1</dd></dl>
     */
    interface EmptyTagAttr {
        /**
         * <p>The variable to be compared is the JSP bean specified by this
         * attribute, if <code>property</code> is not specified, or the value
         * of the specified property of this bean, if <code>property</code>
         * is specified.</p>
         */
        name?: string;

        /**
         * <p>The variable to be compared is the property (of the bean specified
         * by the <code>name</code> attribute) specified by this attribute.
         * The property reference can be simple, nested, and/or indexed.</p>
         */
        property?: string;

        /**
         * <p>The bean scope within which to search for the bean named by the
         * <code>name</code> property, or "any scope" if not specified.</p>
         */
        scope?: string;
    }

    /**
     * <logic:equal>
     * org.apache.struts.taglib.logic.EqualTag
     *
     * @description
     * <p><strong>
     * Evaluate the nested body content of this tag if the requested
     * variable is equal to the specified value.
     * </strong></p>
     * <p>Compares the variable specified by one of the selector attributes
     * against the specified constant value.  The nested body content of this
     * tag is evaluated if the variable and value are <strong>equal</strong>.
     * </p>
     */
    interface EqualTagAttr {
        /**
         * <p>The variable to be compared is the value of the cookie whose
         * name is specified by this attribute.</p>
         */
        cookie?: string;

        /**
         * <p>The variable to be compared is the value of the header whose
         * name is specified by this attribute.  The name match is performed
         * in a case insensitive manner.</p>
         */
        header?: string;

        /**
         * <p>The variable to be compared is the JSP bean specified by this
         * attribute, if <code>property</code> is not specified, or the value
         * of the specified property of this bean, if <code>property</code>
         * is specified.</p>
         */
        name?: string;

        /**
         * <p>The variable to be compared is the first, or only, value of the
         * request parameter specified by this attribute.</p>
         */
        parameter?: string;

        /**
         * <p>The variable to be compared is the property (of the bean specified
         * by the <code>name</code> attribute) specified by this attribute.
         * The property reference can be simple, nested, and/or indexed.</p>
         */
        property?: string;

        /**
         * <p>The bean scope within which to search for the bean named by the
         * <code>name</code> property, or "any scope" if not specified.</p>
         */
        scope?: string;

        /**
         * <p>The constant value to which the variable, specified by other
         * attribute(s) of this tag, will be compared.</p>
         */
        value: string;
    }

    /**
     * <logic:forward>
     * org.apache.struts.taglib.logic.ForwardTag
     *
     * @description
     * <p><strong>
     * Forward control to the page specified by the specified ActionForward
     * entry.
     * </strong></p>
     * <p>Performs a <code>PageContext.forward()</code> or
     * <code>HttpServletResponse.sendRedirect()</code> call for the global
     * <code>ActionForward</code> entry for the specified name.  URL
     * rewriting will occur automatically if a redirect is performed.</p>
     */
    interface ForwardTagAttr {
        /**
         * <p>
         * The logical name of the global <code>ActionForward</code> entry
         * that identifies the destination, and forwarding approach, to be used.
         * <strong>Note</strong>: forwarding to Tiles definitions is not supported
         * from this tag.  You should forward to them from an Action subclass.
         * </p>
         */
        name: string;
    }

    /**
     * <logic:greaterEqual>
     * org.apache.struts.taglib.logic.GreaterEqualTag
     *
     * @description
     * <p><strong>
     * Evaluate the nested body content of this tag if the requested
     * variable is greater than or equal to the specified value.
     * </strong></p>
     * <p>Compares the variable specified by one of the selector attributes
     * against the specified constant value.  The nested body content of this
     * tag is evaluated if the variable is <strong>greater than or equal</strong>
     * to the value.</p>
     */
    interface GreaterEqualTagAttr {
        /**
         * <p>The variable to be compared is the value of the cookie whose
         * name is specified by this attribute.</p>
         */
        cookie?: string;

        /**
         * <p>The variable to be compared is the value of the header whose
         * name is specified by this attribute.  The name match is performed
         * in a case insensitive manner.</p>
         */
        header?: string;

        /**
         * <p>The variable to be compared is the JSP bean specified by this
         * attribute, if <code>property</code> is not specified, or the value
         * of the specified property of this bean, if <code>property</code>
         * is specified.</p>
         */
        name?: string;

        /**
         * <p>The variable to be compared is the first, or only, value of the
         * request parameter specified by this attribute.</p>
         */
        parameter?: string;

        /**
         * <p>The variable to be compared is the property (of the bean specified
         * by the <code>name</code> attribute) specified by this attribute.
         * The property reference can be simple, nested, and/or indexed.</p>
         */
        property?: string;

        /**
         * <p>The bean scope within which to search for the bean named by the
         * <code>name</code> property, or "any scope" if not specified.</p>
         */
        scope?: string;

        /**
         * <p>The constant value to which the variable, specified by other
         * attribute(s) of this tag, will be compared.</p>
         */
        value: string;
    }

    /**
     * <logic:greaterThan>
     * org.apache.struts.taglib.logic.GreaterThanTag
     *
     * @description
     * <p><strong>
     * Evaluate the nested body content of this tag if the requested
     * variable is greater than the specified value.
     * </strong></p>
     * <p>Compares the variable specified by one of the selector attributes
     * against the specified constant value.  The nested body content of this
     * tag is evaluated if the variable is <strong>greater than</strong>
     * the value.</p>
     */
    interface GreaterThanTagAttr {
        /**
         * <p>The variable to be compared is the value of the cookie whose
         * name is specified by this attribute.</p>
         */
        cookie?: string;

        /**
         * <p>The variable to be compared is the value of the header whose
         * name is specified by this attribute.  The name match is performed
         * in a case insensitive manner.</p>
         */
        header?: string;

        /**
         * <p>The variable to be compared is the JSP bean specified by this
         * attribute, if <code>property</code> is not specified, or the value
         * of the specified property of this bean, if <code>property</code>
         * is specified.</p>
         */
        name?: string;

        /**
         * <p>The variable to be compared is the first, or only, value of the
         * request parameter specified by this attribute.</p>
         */
        parameter?: string;

        /**
         * <p>The variable to be compared is the property (of the bean specified
         * by the <code>name</code> attribute) specified by this attribute.
         * The property reference can be simple, nested, or indexed.</p>
         */
        property?: string;

        /**
         * <p>The bean scope within which to search for the bean named by the
         * <code>name</code> property, or "any scope" if not specified.</p>
         */
        scope?: string;

        /**
         * <p>The constant value to which the variable, specified by other
         * attribute(s) of this tag, will be compared.</p>
         */
        value: string;
    }

    /**
     * <logic:iterate>
     * org.apache.struts.taglib.logic.IterateTag
     *
     * @description
     * <p><strong>
     * Repeat the nested body content of this tag over a specified collection.
     * </strong></p>
     * <p>Repeats the nested body content of this tag once for every element
     * of the specified collection, which must be an <code>Iterator</code>,
     * a <code>Collection</code>, a <code>Map</code> (whose values are to be
     * iterated over), or an array.  The collection to be iterated over must be
     * specified in one of the following ways:</p>
     * <ul>
     * <li>As a runtime expression specified as the value of the
     * <code>collection</code> attribute.</li>
     * <li>As a JSP bean specified by the <code>name</code> attribute.</li>
     * <li>As the property, specified by the <code>property</code>, of the
     * JSP bean specified by the <code>name</code> attribute.</li>
     * </ul>
     * <p>The collection to be iterated over MUST conform to one of the following
     * requirements in order for iteration to be successful:</p>
     * <ul>
     * <li>An array of Java objects or primitives.</li>
     * <li>An implementation of <code>java.util.Collection</code>, including
     * <code>ArrayList</code> and <code>Vector</code>.</li>
     * <li>An implementation of <code>java.util.Enumeration</code>.</li>
     * <li>An implementation of <code>java.util.Iterator</code>.</li>
     * <li>An implementation of <code>java.util.Map</code>, including
     * <code>HashMap</code>, <code>Hashtable</code>, and
     * <code>TreeMap</code>.  <strong>NOTE</strong> - See below for
     * additional information about accessing Maps.</li>
     * </ul>
     * <p>Normally, each object exposed by the iterate tag is an element
     * of the underlying collection you are iterating over.  However, if you
     * iterate over a <code>Map</code>, the exposed object is of type
     * <code>Map.Entry</code> that has two properties:</p>
     * <ul>
     * <li><code>key</code> - The key under which this item is stored in the
     * underlying Map.</li>
     * <li><code>value</code> - The value that corresponds to this key.</li>
     * </ul>
     * <p>So, if you wish to iterate over the values of a Hashtable, you would
     * implement code like the following:</p>
     * <code>
     * <logic:iterate id="element" name="myhashtable">
     * Next element is <bean:write name="element" property="value"/>
     * </logic:iterate>
     * </code>
     * <p>If the collection you are iterating over can contain <code>null</code>
     * values, the loop will still be performed but no page scope attribute
     * (named by the <code>id</code> attribute) will be created for that loop
     * iteration.  You can use the <code><logic:present></code> and
     * <code><logic:notPresent></code> tags to test for this case.</p>
     */
    interface IterateTagAttr {
        /**
         * <p>A runtime expression that evaluates to a collection (conforming to
         * the requirements listed above) to be iterated over.</p>
         */
        collection?: string;

        /**
         * <p>The name of a page scope JSP bean that will contain the current
         * element of the collection on each iteration, if it is not
         * <code>null</code>.</p>
         */
        id: string;

        /**
         * <p>The name of a page scope JSP bean that will contain the current
         * index of the collection on each iteration.</p>
         */
        indexId?: string;

        /**
         * <p>The maximum number of entries (from the underlying collection) to be
         * iterated through on this page.  This can be either an integer that
         * directly expresses the desired value, or the name of a JSP bean (in
         * any scope) of type <code>java.lang.Integer</code> that defines the
         * desired value.  If not present, there will be no limit on the number
         * of iterations performed.</p>
         */
        length?: string;

        /**
         * <p>The name of the JSP bean containing the collection to be iterated
         * (if <code>property</code> is not specified), or the JSP bean whose
         * property getter returns the collection to be iterated (if
         * <code>property</code> is specified).</p>
         */
        name?: string;

        /**
         * <p>The zero-relative index of the starting point at which entries from
         * the underlying collection will be iterated through.  This can be either
         * an integer that directly expresses the desired value, or the name of a
         * JSP bean (in any scope) of type <code>java.lang.Integer</code> that
         * defines the desired value.  If not present, zero is assumed (meaning
         * that the collection will be iterated from the beginning.</p>
         */
        offset?: string;

        /**
         * <p>Name of the property, of the JSP bean specified by <code>name</code>,
         * whose getter returns the collection to be iterated.</p>
         */
        property?: string;

        /**
         * <p>The bean scope within which to search for the bean named by the
         * <code>name</code> property, or "any scope" if not specified.</p>
         */
        scope?: string;

        /**
         * <p>Fully qualified Java class name of the element to be exposed through
         * the JSP bean named from the <code>id</code> attribute.  If not present,
         * no type conversions will be performed.  NOTE:  The actual elements of
         * the collection must be assignment-compatible with this class, or a
         * request time ClassCastException will occur.</p>
         */
        type?: string;
    }

    /**
     * <logic:lessEqual>
     * org.apache.struts.taglib.logic.LessEqualTag
     *
     * @description
     * <p><strong>
     * Evaluate the nested body content of this tag if the requested
     * variable is less than or equal to the specified value.
     * </strong></p>
     * <p>Compares the variable specified by one of the selector attributes
     * against the specified constant value.  The nested body content of this
     * tag is evaluated if the variable is <strong>less than or equal</strong>
     * to the value.</p>
     */
    interface LessEqualTagAttr {
        /**
         * <p>The variable to be compared is the value of the cookie whose
         * name is specified by this attribute.</p>
         */
        cookie?: string;

        /**
         * <p>The variable to be compared is the value of the header whose
         * name is specified by this attribute.  The name match is performed
         * in a case insensitive manner.</p>
         */
        header?: string;

        /**
         * <p>The variable to be compared is the JSP bean specified by this
         * attribute, if <code>property</code> is not specified, or the value
         * of the specified property of this bean, if <code>property</code>
         * is specified.</p>
         */
        name?: string;

        /**
         * <p>The variable to be compared is the first, or only, value of the
         * request parameter specified by this attribute.</p>
         */
        parameter?: string;

        /**
         * <p>The variable to be compared is the property (of the bean specified
         * by the <code>name</code> attribute) specified by this attribute.
         * The property reference can be simple, nested, or indexed.</p>
         */
        property?: string;

        /**
         * <p>The bean scope within which to search for the bean named by the
         * <code>name</code> property, or "any scope" if not specified.</p>
         */
        scope?: string;

        /**
         * <p>The constant value to which the variable, specified by other
         * attribute(s) of this tag, will be compared.</p>
         */
        value: string;
    }

    /**
     * <logic:lessThan>
     * org.apache.struts.taglib.logic.LessThanTag
     *
     * @description
     * <p><strong>
     * Evaluate the nested body content of this tag if the requested
     * variable is less than the specified value.
     * </strong></p>
     * <p>Compares the variable specified by one of the selector attributes
     * against the specified constant value.  The nested body content of this
     * tag is evaluated if the variable is <strong>less than</strong>
     * the value.</p>
     */
    interface LessThanTagAttr {
        /**
         * <p>The variable to be compared is the value of the cookie whose
         * name is specified by this attribute.</p>
         */
        cookie?: string;

        /**
         * <p>The variable to be compared is the value of the header whose
         * name is specified by this attribute.  The name match is performed
         * in a case insensitive manner.</p>
         */
        header?: string;

        /**
         * <p>The variable to be compared is the JSP bean specified by this
         * attribute, if <code>property</code> is not specified, or the value
         * of the specified property of this bean, if <code>property</code>
         * is specified.</p>
         */
        name?: string;

        /**
         * <p>The variable to be compared is the first, or only, value of the
         * request parameter specified by this attribute.</p>
         */
        parameter?: string;

        /**
         * <p>The variable to be compared is the property (of the bean specified
         * by the <code>name</code> attribute) specified by this attribute.
         * The property reference can be simple, nested, and/or indexed.</p>
         */
        property?: string;

        /**
         * <p>The bean scope within which to search for the bean named by the
         * <code>name</code> property, or "any scope" if not specified.</p>
         */
        scope?: string;

        /**
         * <p>The constant value to which the variable, specified by other
         * attribute(s) of this tag, will be compared.</p>
         */
        value: string;
    }

    /**
     * <logic:match>
     * org.apache.struts.taglib.logic.MatchTag
     *
     * @description
     * <p><strong>
     * Evaluate the nested body content of this tag if the specified value
     * is an appropriate substring of the requested variable.
     * </strong></p>
     * <p>Matches the variable specified by one of the selector attributes
     * (as a String) against the specified constant value.  If the value is
     * a substring (appropriately limited by the <code>location</code>
     * attribute), the nested body content of this tag is evaluated.</p>
     */
    interface MatchTagAttr {
        /**
         * <p>The variable to be matched is the value of the cookie whose
         * name is specified by this attribute.</p>
         */
        cookie?: string;

        /**
         * <p>The variable to be matched is the value of the header whose
         * name is specified by this attribute.  The name match is performed
         * in a case insensitive manner.</p>
         */
        header?: string;

        /**
         * <p>If not specified, a match between the variable and the value may
         * occur at any position within the variable string.  If specified, the
         * match must occur at the specified location (either <code>start</code>
         * or <code>end</code>) of the variable string.</p>
         */
        location?: string;

        /**
         * <p>The variable to be matched is the JSP bean specified by this
         * attribute, if <code>property</code> is not specified, or the value
         * of the specified property of this bean, if <code>property</code>
         * is specified.</p>
         */
        name?: string;

        /**
         * <p>The variable to be matched is the first, or only, value of the
         * request parameter specified by this attribute.</p>
         */
        parameter?: string;

        /**
         * <p>The variable to be matched is the property (of the bean specified
         * by the <code>name</code> attribute) specified by this attribute.
         * The property reference can be simple, nested, and/or indexed.</p>
         */
        property?: string;

        /**
         * <p>The bean scope within which to search for the bean named by the
         * <code>name</code> property, or "any scope" if not specified.</p>
         */
        scope?: string;

        /**
         * <p>The constant value which is checked for existence as a substring
         * of the specified variable.</p>
         */
        value: string;
    }

    /**
     * <logic:messagesNotPresent>
     * org.apache.struts.taglib.logic.MessagesNotPresentTag
     *
     * @description
     * <p><strong>
     * Generate the nested body content of this tag if the specified
     * message is not present in any scope.
     * </strong></p>
     * <p>Evaluates the nested body content of this tag if
     * an <code>ActionMessages</code>
     * object, <code>ActionErrors</code> object, a String,
     * or a String array is not present in any scope.  If
     * such a bean is found, nothing will be rendered.
     * </p>
     * <dl><dt><b>Since:</b></dt>
     * <dd>Struts 1.1</dd></dl>
     */
    interface MessagesNotPresentTagAttr {
        /**
         * <p>The parameter key used to retrieve the message from page, request,
         * session or application scope.</p>
         */
        name?: string;

        /**
         * <p>Name of the property for which messages should be
         * retrieved.  If not specified, all messages (regardless
         * of property) are retrieved.
         * </p>
         */
        property?: string;

        /**
         * <p>By default the tag will retrieve the bean it will
         * iterate over from the <code>Globals.ERROR_KEY</code> constant string,
         * but if this attribute is set to 'true' the bean
         * will be retrieved from the <code>Globals.MESSAGE_KEY</code>
         * constant string.  Also if this is set to 'true', any value
         * assigned to the name attribute will be ignored.
         * </p>
         */
        message?: string;
    }

    /**
     * <logic:messagesPresent>
     * org.apache.struts.taglib.logic.MessagesPresentTag
     *
     * @description
     * <p><strong>
     * Generate the nested body content of this tag if the specified
     * message is present in any scope.
     * </strong></p>
     * <p>Evaluates the nested body content of this tag if
     * an <code>ActionMessages</code>
     * object, <code>ActionErrors</code> object, a String,
     * or a String array is present in any scope.  If
     * such a bean is not found, nothing will be rendered.
     * </p>
     * <dl><dt><b>Since:</b></dt>
     * <dd>Struts 1.1</dd></dl>
     */
    interface MessagesPresentTagAttr {
        /**
         * <p>The parameter key used to retrieve the message from page, request,
         * session, or application scope.</p>
         */
        name?: string;

        /**
         * <p>Name of the property for which messages should be
         * retrieved.  If not specified, all messages (regardless
         * of property) are retrieved.
         * </p>
         */
        property?: string;

        /**
         * <p>By default the tag will retrieve the bean it will
         * iterate over from the <code>Globals.ERROR_KEY</code> constant string,
         * but if this attribute is set to 'true' the bean
         * will be retrieved from the <code>Globals.MESSAGE_KEY</code>
         * constant string.  Also if this is set to 'true', any value
         * assigned to the name attribute will be ignored.
         * </p>
         */
        message?: string;

        /**
         * Specifies the name of the page-scoped attribute to set
         * with the message count. This is useful, for instance, when
         * needing to total the number of messages or errors produced
         * by a form submission. The attribute goes out of scope after
         * the tag executes.
         * <dl><dt><b>Since:</b></dt>
         * <dd>Struts 1.4</dd></dl>
         */
        count?: string;
    }

    /**
     * <logic:notEmpty>
     * org.apache.struts.taglib.logic.NotEmptyTag
     *
     * @description
     * <p><strong>
     * Evaluate the nested body content of this tag if the requested variable is
     * neither null, nor an empty string, nor an empty java.util.Collection
     * (tested by the .isEmpty() method on the java.util.Collection interface).
     * </strong></p>
     * <p>This tag evaluates its nested body content only if the specified value
     * is present (i.e. not <code>null</code>) and is not an empty string (i.e. a
     * <code>java.lang.String</code> with a length of zero).</p>
     * <p>
     * <strong>JSTL</strong>:  The equivalent JSTL tag is <c:if> using the
     * <code>! empty</code> operator.  For example,
     * <code>
     * <c:if test="${ ! empty sessionScope.myBean.myProperty}">
     * do something
     * </c:if>
     * </code>
     * </p>
     */
    interface NotEmptyTagAttr {
        /**
         * <p>The variable to be compared is the JSP bean specified by this
         * attribute, if <code>property</code> is not specified, or the value
         * of the specified property of this bean, if <code>property</code>
         * is specified.</p>
         */
        name?: string;

        /**
         * <p>The variable to be compared is the property (of the bean specified
         * by the <code>name</code> attribute) specified by this attribute.
         * The property reference can be simple, nested, and/or indexed.</p>
         */
        property?: string;

        /**
         * <p>The bean scope within which to search for the bean named by the
         * <code>name</code> property, or "any scope" if not specified.</p>
         */
        scope?: string;
    }

    /**
     * <logic:notEqual>
     * org.apache.struts.taglib.logic.NotEqualTag
     *
     * @description
     * <p><strong>
     * Evaluate the nested body content of this tag if the requested
     * variable is not equal to the specified value.
     * </strong></p>
     * <p>Compares the variable specified by one of the selector attributes
     * against the specified constant value.  The nested body content of this
     * tag is evaluated if the variable and value are <strong>not equal</strong>.
     * </p>
     */
    interface NotEqualTagAttr {
        /**
         * <p>The variable to be compared is the value of the cookie whose
         * name is specified by this attribute.</p>
         */
        cookie?: string;

        /**
         * <p>The variable to be compared is the value of the header whose
         * name is specified by this attribute.  The name match is performed
         * in a case insensitive manner.</p>
         */
        header?: string;

        /**
         * <p>The variable to be compared is the JSP bean specified by this
         * attribute, if <code>property</code> is not specified, or the value
         * of the specified property of this bean, if <code>property</code>
         * is specified.</p>
         */
        name?: string;

        /**
         * <p>The variable to be compared is the first, or only, value of the
         * request parameter specified by this attribute.</p>
         */
        parameter?: string;

        /**
         * <p>The variable to be compared is the property (of the bean specified
         * by the <code>name</code> attribute) specified by this attribute.
         * The property reference can be simple, nested, and/or indexed.</p>
         */
        property?: string;

        /**
         * <p>The bean scope within which to search for the bean named by the
         * <code>name</code> property, or "any scope" if not specified.</p>
         */
        scope?: string;

        /**
         * <p>The constant value to which the variable, specified by other
         * attribute(s) of this tag, will be compared.</p>
         */
        value: string;
    }

    /**
     * <logic:notMatch>
     * org.apache.struts.taglib.logic.NotMatchTag
     *
     * @description
     * <p><strong>
     * Evaluate the nested body content of this tag if the specified value
     * is not an appropriate substring of the requested variable.
     * </strong></p>
     * <p>Matches the variable specified by one of the selector attributes
     * (as a String) against the specified constant value.  If the value is
     * not a substring (appropriately limited by the <code>location</code>
     * attribute), the nested body content of this tag is evaluated.</p>
     */
    interface NotMatchTagAttr {
        /**
         * <p>The variable to be matched is the value of the cookie whose
         * name is specified by this attribute.</p>
         */
        cookie?: string;

        /**
         * <p>The variable to be matched is the value of the header whose
         * name is specified by this attribute.  The name match is performed
         * in a case insensitive manner.</p>
         */
        header?: string;

        /**
         * <p>If not specified, a match between the variable and the value may
         * occur at any position within the variable string.  If specified, the
         * match must occur at the specified location (either <code>start</code>
         * or <code>end</code>) of the variable string.</p>
         */
        location?: string;

        /**
         * <p>The variable to be matched is the JSP bean specified by this
         * attribute, if <code>property</code> is not specified, or the value
         * of the specified property of this bean, if <code>property</code>
         * is specified.</p>
         */
        name?: string;

        /**
         * <p>The variable to be matched is the first, or only, value of the
         * request parameter specified by this attribute.</p>
         */
        parameter?: string;

        /**
         * <p>The variable to be matched is the property (of the bean specified
         * by the <code>name</code> attribute) specified by this attribute.
         * The property reference can be simple, nested, and/or indexed.</p>
         */
        property?: string;

        /**
         * <p>The bean scope within which to search for the bean named by the
         * <code>name</code> property, or "any scope" if not specified.</p>
         */
        scope?: string;

        /**
         * <p>The constant value which is checked for existence as a substring
         * of the specified variable.</p>
         */
        value: string;
    }

    /**
     * <logic:notPresent>
     * org.apache.struts.taglib.logic.NotPresentTag
     *
     * @description
     * <p><strong>
     * Generate the nested body content of this tag if the specified
     * value is not present in this request.
     * </strong></p>
     * <p>Depending on which attribute is specified, this tag checks the
     * current request, and evaluates the nested body content of this tag
     * only if the specified value <strong>is not</strong> present.  Only one
     * of the attributes may be used in one occurrence of this tag, unless
     * you use the <code>property</code> attribute, in which case the
     * <code>name</code> attribute is also required.</p>
     */
    interface NotPresentTagAttr {
        /**
         * <p>Checks for the existence of a cookie with the specified name.</p>
         */
        cookie?: string;

        /**
         * <p>Checks for the existence of an HTTP header with the specified
         * name.  The name match is performed in a case insensitive manner.</p>
         */
        header?: string;

        /**
         * <p>Checks for the existence of a JSP bean, in any scope, with the
         * specified name.  If <code>property</code> is also specified, checks
         * for a non-null property value for the specified property.</p>
         */
        name?: string;

        /**
         * <p>Checks for the existence of at least one occurrence of the
         * specified request parameter on this request, even if the parameter
         * value is a zero-length string.</p>
         */
        parameter?: string;

        /**
         * <p>Checks for the existence of a non-null property value, returned
         * by a property getter method on the JSP bean (in any scope) that is
         * specified by the <code>name</code> attribute.  Property references
         * can be simple, nested, and/or indexed.</p>
         */
        property?: string;

        /**
         * <p>Checks whether the currently authenticated user (if any) has been
         * associated with the specified security role.</p>
         */
        role?: string;

        /**
         * <p>The bean scope within which to search for the bean named by the
         * <code>name</code> property, or "any scope" if not specified.</p>
         */
        scope?: string;

        /**
         * <p>Checks whether the currently authenticated user principal has the
         * specified name.</p>
         */
        user?: string;
    }

    /**
     * <logic:present>
     * org.apache.struts.taglib.logic.PresentTag
     *
     * @description
     * <p><strong>
     * Generate the nested body content of this tag if the specified
     * value is present in this request.
     * </strong></p>
     * <p>Depending on which attribute is specified, this tag checks the
     * current request, and evaluates the nested body content of this tag
     * only if the specified value <strong>is</strong> present.  Only one
     * of the attributes may be used in one occurrence of this tag, unless
     * you use the <code>property</code> attribute, in which case the
     * <code>name</code> attribute is also required.</p>
     */
    interface PresentTagAttr {
        /**
         * <p>Checks for the existence of a cookie with the specified name.</p>
         */
        cookie?: string;

        /**
         * <p>Checks for the existence of an HTTP header with the specified
         * name.  The name match is performed in a case insensitive manner.</p>
         */
        header?: string;

        /**
         * <p>Checks for the existence of a JSP bean, in any scope, with the
         * specified name.  If <code>property</code> is also specified, checks
         * for a non-null property value for the specified property.</p>
         */
        name?: string;

        /**
         * <p>Checks for the existence of at least one occurrence of the
         * specified request parameter on this request, even if the parameter
         * value is a zero-length string.</p>
         */
        parameter?: string;

        /**
         * <p>Checks for the existence of a non-null property value, returned
         * by a property getter method on the JSP bean (in any scope) that is
         * specified by the <code>name</code> attribute.  Property references
         * can be simple, nested, and/or indexed.</p>
         */
        property?: string;

        /**
         * <p>Checks whether the currently authenticated user (if any) has been
         * associated with any of the specified security roles. Use a comma-delimited
         * list to check for multiple roles. Example:
         * <code><logic:present role="role1,role2,role3">
         * code.....
         * </logic:present></code></p>
         */
        role?: string;

        /**
         * <p>The bean scope within which to search for the bean named by the
         * <code>name</code> property, or "any scope" if not specified.</p>
         */
        scope?: string;

        /**
         * <p>Checks whether the currently authenticated user principal has the
         * specified name.</p>
         */
        user?: string;
    }

    /**
     * <logic:redirect>
     * org.apache.struts.taglib.logic.RedirectTag
     *
     * @description
     * <p><strong>Render an HTTP Redirect</strong></p>
     * <p>Performs an <code>HttpServletResponse.sendRedirect()</code>
     * call to the hyperlink specified by the attributes to this
     * tag.  URL rewriting will be applied automatically, to
     * maintain session state in the absence of cookies.</p>
     * <p>The base URL for this redirect is calculated based on
     * which of the following attributes you specify (you must
     * specify exactly one of them):</p>
     * <ul>
     * <li><em>forward</em> - Use the value of this attribute as the
     * name of a global <code>ActionForward</code> to be looked
     * up, and use the module-relative or context-relative
     * URI found there.</li>
     * <li><em>href</em> - Use the value of this attribute unchanged.
     * </li>
     * <li><em>page</em> - Use the value of this attribute as an
     * module-relative URI, and generate a server-relative
     * URI by including the context path.</li>
     * </ul>
     * <p>Normally, the redirect you specify with one of the
     * attributes described in the previous paragraph will be left
     * unchanged (other than URL rewriting if necessary).  However,
     * there are two ways you can append one or more dynamically
     * defined query parameters to the hyperlink -- specify a single
     * parameter with the <code>paramId</code> attribute (and its
     * associated attributes to select the value), or specify the
     * <code>name</code> (and optional <code>property</code>)
     * attributes to select a <code>java.util.Map</code> bean that
     * contains one or more parameter ids and corresponding values.
     * </p>
     * <p>To specify a single parameter, use the <code>paramId</code>
     * attribute to define the name of the request parameter to be
     * submitted.  To specify the corresponding value, use one of the
     * following approaches:</p>
     * <ul>
     * <li><em>Specify only the <code>paramName</code> attribute</em>
     * - The named JSP bean (optionally scoped by the value of the
     * <code>paramScope</code> attribute) must identify a value
     * that can be converted to a String.</li>
     * <li><em>Specify both the <code>paramName</code> and
     * <code>paramProperty</code> attributes</em> - The specified
     * property getter method will be called on the JSP bean
     * identified by the <code>paramName</code> (and optional
     * <code>paramScope</code>) attributes, in order to select
     * a value that can be converted to a String.</li>
     * </ul>
     * <p>If you prefer to specify a <code>java.util.Map</code> that
     * contains all of the request parameters to be added to the
     * hyperlink, use one of the following techniques:</p>
     * <ul>
     * <li><em>Specify only the <code>name</code> attribute</em> -
     * The named JSP bean (optionally scoped by the value of
     * the <code>scope</code> attribute) must identify a
     * <code>java.util.Map</code> containing the parameters.</li>
     * <li><em>Specify both <code>name</code> and
     * <code>property</code> attributes</em> - The specified
     * property getter method will be called on the bean
     * identified by the <code>name</code> (and optional
     * <code>scope</code>) attributes, in order to return the
     * <code>java.util.Map</code> containing the parameters.</li>
     * </ul>
     * <p>As the <code>Map</code> is processed, the keys are assumed
     * to be the names of query parameters to be appended to the
     * hyperlink.  The value associated with each key must be either
     * a String or a String array representing the parameter value(s).
     * If a String array is specified, more than one value for the
     * same query parameter name will be created.</p>
     */
    interface RedirectTagAttr {
        /**
         * <p>Logical name of a global <code>Action</code> that
         * contains the actual content-relative URI of the destination
         * of this transfer.  This hyperlink may be dynamically
         * modified by the inclusion of query parameters, as described
         * in the tag description.  You <strong>must</strong> specify
         * exactly one of the <code>action</code> attribute, the
         * <code>forward</code> attribute, the
         * <code>href</code> attribute,
         * or the <code>page</code> attribute.</p>
         */
        action?: string;

        /**
         * <p>Optional anchor tag ("#xxx") to be added to the generated
         * hyperlink.  Specify this value <strong>without</strong> any
         * "#" character.</p>
         */
        anchor?: string;

        /**
         * <p>Logical name of a global <code>ActionForward</code> that
         * contains the actual content-relative URI of the destination
         * of this redirect.  This URI may be dynamically
         * modified by the inclusion of query parameters, as described
         * in the tag description.  You <strong>must</strong> specify
         * exactly one of the <code>forward</code> attribute, the
         * <code>href</code> attribute, the <code>linkName</code>
         * attribute, or the <code>page</code> attribute.</p>
         */
        forward?: string;

        /**
         * <p>The URL to which this redirect will transfer control.
         * This URL may be dynamically modified
         * by the inclusion of query parameters, as described in the
         * tag description.  You <strong>must</strong> specify
         * exactly one of the <code>forward</code> attribute, the
         * <code>href</code> attribute, the <code>linkName</code>
         * attribute, or the <code>page</code> attribute.</p>
         */
        href?: string;

        /**
         * <p>The name of a JSP bean that contains a <code>Map</code>
         * representing the query parameters (if <code>property</code>
         * is not specified), or a JSP bean whose property getter is
         * called to return a <code>Map</code> (if <code>property</code>
         * is specified).</p>
         */
        name?: string;

        /**
         * <p>The context-relative path (beginning with a "/"
         * character) to which this hyperlink will transfer control
         * if activated.  This hyperlink may be dynamically modified
         * by the inclusion of query parameters, as described in the
         * tag description.  You <strong>must</strong> specify exactly
         * one of the <code>forward</code> attribute, the
         * <code>href</code> attribute, the <code>linkName</code>
         * attribute, or the <code>page</code> attribute.</p>
         */
        page?: string;

        /**
         * <p>The name of the request parameter that will be dynamically
         * added to the generated hyperlink.  The corresponding value is
         * defined by the <code>paramName</code> and (optional)
         * <code>paramProperty</code> attributes, optionally scoped by
         * the <code>paramScope</code> attribute</p>
         */
        paramId?: string;

        /**
         * <p>The name of a JSP bean that is a String containing the
         * value for the request parameter named by <code>paramId</code>
         * (if <code>paramProperty</code> is not specified), or a JSP
         * bean whose property getter is called to return a String
         * (if <code>paramProperty</code> is specified).  The JSP bean
         * is constrained to the bean scope specified by the
         * <code>paramScope</code> property, if it is specified.</p>
         */
        paramName?: string;

        /**
         * <p>The name of a property of the bean specified by the
         * <code>paramName</code> attribute, whose return value must
         * be a String containing the value of the request parameter
         * (named by the <code>paramId</code> attribute) that will be
         * dynamically added to this hyperlink.</p>
         */
        paramProperty?: string;

        /**
         * <p>The scope within which to search for the bean specified
         * by the <code>paramName</code> attribute.  If not specified,
         * all scopes are searched.</p>
         */
        paramScope?: string;

        /**
         * <p>The name of a property of the bean specified by the
         * <code>name</code> attribute, whose return value must be
         * a <code>java.util.Map</code> containing the query parameters
         * to be added to the hyperlink.  You <strong>must</strong>
         * specify the <code>name</code> attribute if you specify
         * this attribute.</p>
         */
        property?: string;

        /**
         * <p>The scope within which to search for the bean specified
         * by the <code>name</code> attribute.  If not specified, all
         * scopes are searched.</p>
         */
        scope?: string;

        /**
         * <p>Set to <code>true</code> if you want the current
         * transaction control token included in the generated
         * URL for this redirect.</p>
         */
        transaction?: string;

        /**
         * <p>If set to <code>true</code>, LocalCharacterEncoding will be
         * used, that is, the characterEncoding set to the HttpServletResponse,
         * as prefered character encoding rather than UTF-8, when
         * URLEncoding is done on parameters of the URL.</p>
         */
        useLocalEncoding?: string;
    }
}
