import type {NSP} from "nsp-server-pages";

export const beanTags: Struts1Bean.beanTags;

/**
 * bean
 * uri: http://struts.apache.org/tags-bean
 *
 * <p><strong>Note:  Some of the features in this taglib are also
 * available in the <a href="http://java.sun.com/products/jsp/jstl/">JavaServer Pages Standard Tag Library (JSTL)</a>.
 * The Struts team encourages the use of the standard tags over the Struts
 * specific tags when possible.</strong></p>
 * <p>This tag library contains tags useful in accessing beans and their
 * properties, as well as defining new beans (based on these accesses)
 * that are accessible to the remainder of the page via scripting variables
 * and page scope attributes.  Convenient mechanisms to create new beans
 * based on the value of request cookies, headers, and parameters are also
 * provided.</p>
 * <p>Many of the tags in this tag library will throw a
 * <code>JspException</code> at runtime when they are utilized incorrectly
 * (such as when you specify an invalid combination of tag attributes).  JSP
 * allows you to declare an "error page" in the <code><%@ page %></code>
 * directive.  If you wish to process the actual exception that caused the
 * problem, it is passed to the error page as a request attribute under key
 * <code>org.apache.struts.action.EXCEPTION</code>.</p>
 */
declare namespace Struts1Bean {
    type beanTags = {
        cookie: NSP.TagCon<CookieTagAttr>;
        define: NSP.TagCon<DefineTagAttr>;
        header: NSP.TagCon<HeaderTagAttr>;
        include: NSP.TagCon<IncludeTagAttr>;
        message: NSP.TagCon<MessageTagAttr>;
        page: NSP.TagCon<PageTagAttr>;
        parameter: NSP.TagCon<ParameterTagAttr>;
        resource: NSP.TagCon<ResourceTagAttr>;
        size: NSP.TagCon<SizeTagAttr>;
        struts: NSP.TagCon<StrutsTagAttr>;
        write: NSP.TagCon<WriteTagAttr>;
    };

    /**
     * <bean:cookie>
     * org.apache.struts.taglib.bean.CookieTag
     *
     * @description
     * <p><strong>
     * Define a scripting variable based on the value(s) of the specified
     * request cookie.
     * </strong></p>
     * <p>Retrieve the value of the specified request cookie (as a single
     * value or multiple values, depending on the <code>multiple</code> attribute),
     * and define the result as a page scope attribute of type <code>Cookie</code>
     * (if <code>multiple</code> is not specified) or <code>Cookie[]</code>
     * (if <code>multiple</code> is specified).</p>
     * <p>If no cookie with the specified name can be located, and no default
     * value is specified, a request time exception will be thrown.</p>
     */
    interface CookieTagAttr {
        /**
         * <p>Specifies the name of the scripting variable (and associated page
         * scope attribute) that will be made available with the value of the
         * specified request cookie.</p>
         */
        id: string;

        /**
         * <p>If any arbitrary value for this attribute is specified, causes all
         * matching cookies to be accumulated and stored into a bean of type
         * <code>Cookie[]</code>.  If not specified, the first value for the
         * specified cookie will be retrieved as a value of type
         * <code>Cookie</code>.</p>
         */
        multiple?: string;

        /**
         * <p>Specifies the name of the request cookie whose value, or values,
         * is to be retrieved.</p>
         */
        name: string;

        /**
         * <p>The default cookie value to return if no cookie with the
         * specified name was included in this request.</p>
         */
        value?: string;
    }

    /**
     * <bean:define>
     * org.apache.struts.taglib.bean.DefineTag
     *
     * @description
     * <p><strong>
     * Define a scripting variable based on the value(s) of the specified
     * bean property.
     * </strong></p>
     * <p>Create a new attribute (in the scope specified by the
     * <code>toScope</code> property, if any), and a corresponding scripting
     * variable, both of which are named by the value of the <code>id</code>
     * attribute.  The corresponding value to which this new attribute (and
     * scripting variable) is set are specified via use of exactly one of the
     * following approaches (trying to use more than one will result in a
     * JspException being thrown):</p>
     * <ul>
     * <li>Specify a <code>name</code> attribute (plus optional
     * <code>property</code> and <code>scope</code> attributes) -
     * The created attribute and scripting variable will be of the type of the
     * retrieved JavaBean property, unless it is a Java primitive type,
     * in which case it will be wrapped in the appropriate wrapper class
     * (i.e. int is wrapped by java.lang.Integer).</li>
     * <li>Specify a <code>value</code> attribute - The created attribute and
     * scripting variable will be of type <code>java.lang.String</code>,
     * set to the value of this attribute.</li>
     * <li>Specify nested body content - The created attribute and scripting
     * variable will be of type <code>java.lang.String</code>, set to
     * the value of the nested body content.</li>
     * </ul>
     * <p>If a problem occurs while retrieving the specified bean property, a
     * request time exception will be thrown.</p>
     * <p>The <code><bean:define></code> tag differs from
     * <code><jsp:useBean></code> in several ways, including:</p>
     * <ul>
     * <li>Unconditionally creates (or replaces) a bean under the
     * specified identifier.</li>
     * <li>Can create a bean with the value returned by a property getter
     * of a different bean (including properties referenced with a
     * nested and/or indexed property name).</li>
     * <li>Can create a bean whose contents is a literal string (or the result
     * of a runtime expression) specified by the <code>value</code>
     * attribute.</li>
     * <li>Does not support nested content (such as
     * <code><jsp:setProperty></code> tags) that are only executed
     * if a bean was actually created.</li>
     * </ul>
     * <p><strong>USAGE NOTE</strong> - There is a restriction in the JSP 1.1
     * Specification that disallows using the same value for an <code>id</code>
     * attribute more than once in a single JSP page.  Therefore, you will not
     * be able to use <code><bean:define></code> for the same bean
     * name more than once in a single page.</p>
     * <p><strong>USAGE NOTE</strong> - If you use another tag to create the
     * body content (e.g. bean:write), that tag must return a non-empty String.
     * An empty String equates to an empty body or a null String, and a new
     * scripting variable cannot be defined as null. Your bean must return a
     * non-empty String, or the define tag must be wrapped within a logic tag
     * to test for an empty or null value.</p>
     * <p><strong>USAGE NOTE</strong> - You cannot use bean:define to <strong>instantiate</strong>
     * a DynaActionForm (type="org.apache.struts.action.DynaActionForm") with
     * the properties specified in the struts-config. The mechanics of creating
     * the dyna-properties is complex and cannot be handled by a no-argument
     * constructor. If you need to create an ActionForm this way, you must use
     * a conventional ActionForm.
     * </p>
     * <p>See the Bean Developer's Guide section on
     * <a href="../apidocs/org/apache/struts/taglib/bean/package-summary.html#doc.Creation">
     * bean creation</a> for more information about these differences, as well
     * as alternative approaches to introducing beans into a JSP page.</p>
     */
    interface DefineTagAttr {
        /**
         * <p>Specifies the name of the scripting variable (and associated page
         * scope attribute) that will be made available with the value of the
         * specified property.</p>
         */
        id: string;

        /**
         * <p>Specifies the attribute name of the bean whose property is accessed
         * to define a new page scope attribute (if <code>property</code> is also
         * specified) or the attribute name of the bean that is duplicated with
         * the new reference created by this tag (if <code>property</code> is not
         * also specified).  This attribute is required unless you specify
         * a <code>value</code> attribute or nested body content.</p>
         */
        name?: string;

        /**
         * <p>Specifies the name of the property to be accessed on the bean
         * specified by <code>name</code>.  This value may be a simple, indexed,
         * or nested property reference expression.  If not specified, the bean
         * identified by <code>name</code> is given a new reference identified by
         * <code>id</code>.</p>
         */
        property?: string;

        /**
         * <p>Specifies the variable scope searched to retrieve the bean specified
         * by <code>name</code>.  If not specified, the default rules applied by
         * <code>PageContext.findAttribute()</code> are applied.</p>
         */
        scope?: string;

        /**
         * <p>Specifies the variable scope into which the newly defined bean will
         * be created.  If not specified, the bean will be created in
         * <code>page</code> scope.</p>
         */
        toScope?: string;

        /**
         * <p>Specifies the fully qualified class name of the value to be exposed
         * as the <code>id</code> attribute.</p>
         */
        type?: string;

        /**
         * <p>The <code>java.lang.String</code> value to which the exposed bean
         * should be set.  This attribute is required unless you specify the
         * <code>name</code> attribute or nested body content.</p>
         */
        value?: string;
    }

    /**
     * <bean:header>
     * org.apache.struts.taglib.bean.HeaderTag
     *
     * @description
     * <p><strong>
     * Define a scripting variable based on the value(s) of the specified
     * request header.
     * </strong></p>
     * <p>Retrieve the value of the specified request header (as a single
     * value or multiple values, depending on the <code>multiple</code> attribute),
     * and define the result as a page scope attribute of type <code>String</code>
     * (if <code>multiple</code> is not specified) or <code>String[]</code>
     * (if <code>multiple</code> is specified).</p>
     * <p>If no header with the specified name can be located, and no default
     * value is specified, a request time exception will be thrown.</p>
     */
    interface HeaderTagAttr {
        /**
         * <p>Specifies the name of the scripting variable (and associated page
         * scope attribute) that will be made available with the value of the
         * specified request header.</p>
         */
        id: string;

        /**
         * <p>If any arbitrary value for this attribute is specified, causes a call
         * to <code>HttpServletRequest.getHeaders()</code> and a definition of the
         * result as a bean of type <code>String[]</code>.  Otherwise,
         * <code>HttpServletRequest.getHeader()</code> will be called, and a
         * definition of the result as a bean of type <code>String</code>
         * will be performed.</p>
         */
        multiple?: string;

        /**
         * <p>Specifies the name of the request header whose value, or values,
         * is to be retrieved.</p>
         */
        name: string;

        /**
         * <p>The default header value to return if no header with the
         * specified name was included in this request.</p>
         */
        value?: string;
    }

    /**
     * <bean:include>
     * org.apache.struts.taglib.bean.IncludeTag
     *
     * @description
     * <p><strong>
     * Load the response from a dynamic application request and make it available
     * as a bean.
     * </strong></p>
     * <p>Perform an internal dispatch to the specified application component
     * (or external URL)
     * and make the response data from that request available as a bean of
     * type <code>String</code>.  This tag has a function similar to that of
     * the standard <code><jsp:include></code> tag, except that the
     * response data is stored in a page scope attribute instead of being
     * written to the output stream.  If the current request is part of a
     * session, the generated request for the include will also include the
     * session identifier (and thus be part of the same session).</p>
     * <p>The URL used to access the specified application component is
     * calculated based on which of the following attributes you specify
     * (you must specify exactly one of them):</p>
     * <ul>
     * <li><em>forward</em> - Use the value of this attribute as the name
     * of a global <code>ActionForward</code> to be looked up, and
     * use the module-relative or context-relative URI found there.</li>
     * <li><em>href</em> - Use the value of this attribute unchanged (since
     * this might link to a resource external to the application, the
     * session identifier is <strong>not</strong> included.</li>
     * <li><em>page</em> - Use the value of this attribute as an
     * module-relative URI to the desired resource.</li>
     * </ul>
     */
    interface IncludeTagAttr {
        /**
         * <p>Optional anchor tag ("#xxx") to be added to the generated
         * hyperlink.  Specify this value <strong>without</strong> any
         * "#" character.</p>
         */
        anchor?: string;

        /**
         * <p>Logical name of a global <code>ActionForward</code> that contains
         * the actual content-relative URI of the resource to be included.</p>
         */
        forward?: string;

        /**
         * <p>Absolute URL (including the appropriate protocol prefix such as
         * "http:") of the resource to be included.  Because this URL could be
         * external to the current web application, the session identifier will
         * <strong>not</strong> be included in the request.</p>
         */
        href?: string;

        /**
         * <p>Specifies the name of the scripting variable (and associated page
         * scope attribute) that will be made available with the value of the
         * specified web application resource.</p>
         */
        id: string;

        /**
         * <p>Module-relative URI (starting with a '/') of the web application
         * resource to be included.</p>
         */
        page?: string;

        /**
         * <p>Set to <code>true</code> if you want the current
         * transaction control token included in the generated
         * URL for this include.</p>
         */
        transaction?: string;
    }

    /**
     * <bean:message>
     * org.apache.struts.taglib.bean.MessageTag
     *
     * @description
     * <p><strong>
     * Render an internationalized message string to the response.
     * </strong></p>
     * <p>Retrieves an internationalized message for the specified locale,
     * using the specified message key, and write it to the output stream.
     * Up to five parametric replacements (such as "{0}") may be specified.</p>
     * <p>The message key may be specified directly, using the <code>key</code>
     * attribute, or indirectly, using the <code>name</code> and
     * <code>property</code> attributes to obtain it from a bean.</p>
     * <p>
     * <strong>JSTL</strong>:  The equivalent JSTL tag is <fmt:message>.  For example,
     * <code>
     * <fmt:message key="my.msg.key">
     * <fmt:param value="replacement text"/>
     * </fmt:message>
     * </code>
     * </p>
     */
    interface MessageTagAttr {
        /**
         * <p>First parametric replacement value, if any.</p>
         */
        arg0?: string;

        /**
         * <p>Second parametric replacement value, if any.</p>
         */
        arg1?: string;

        /**
         * <p>Third parametric replacement value, if any.</p>
         */
        arg2?: string;

        /**
         * <p>Fourth parametric replacement value, if any.</p>
         */
        arg3?: string;

        /**
         * <p>Fifth parametric replacement value, if any.</p>
         */
        arg4?: string;

        /**
         * <p>The name of the application scope bean under which the
         * <code>MessageResources</code> object containing our messages
         * is stored.</p>
         */
        bundle?: string;

        /**
         * <p>The message key of the requested message, which must have
         * a corresponding value in the message resources. If not specified,
         * the key is obtained from the <code>name</code> and
         * <code>property</code> attributes.</p>
         */
        key?: string;

        /**
         * <p>The name of the session scope bean under which our currently
         * selected <code>Locale</code> object is stored.</p>
         */
        locale?: string;

        /**
         * <p>Specifies the attribute name of the bean whose property is accessed
         * to retrieve the value specified by <code>property</code> (if
         * specified).  If <code>property</code> is not specified, the value of
         * this bean itself will be used as the message resource key.</p>
         */
        name?: string;

        /**
         * <p>Specifies the name of the property to be accessed on the bean
         * specified by <code>name</code>.  This value may be a simple, indexed,
         * or nested property reference expression.  If not specified, the value
         * of the bean identified by <code>name</code> will itself be used as the
         * message resource key.</p>
         */
        property?: string;

        /**
         * <p>Specifies the variable scope searched to retrieve the bean specified
         * by <code>name</code>.  If not specified, the default rules applied by
         * <code>PageContext.findAttribute()</code> are applied.</p>
         */
        scope?: string;
    }

    /**
     * <bean:page>
     * org.apache.struts.taglib.bean.PageTag
     *
     * @description
     * <p><strong>
     * Expose a specified item from the page context as a bean.
     * </strong></p>
     * <p>Retrieve the value of the specified item from the page context
     * for this page, and define it as a scripting variable, and a page scope
     * attribute accessible to the remainder of the current page.</p>
     * <p>If a problem occurs while retrieving the specified configuration
     * object, a request time exception will be thrown.</p>
     */
    interface PageTagAttr {
        /**
         * <p>Specifies the name of the scripting variable (and associated
         * page scope attribute) that will be made available with the value of
         * the specified page context property.</p>
         */
        id: string;

        /**
         * <p>Name of the property from our page context to be retrieved and
         * exposed.  Must be one of <code>application</code>, <code>config</code>,
         * <code>request</code>, <code>response</code>, or <code>session</code>.
         * </p>
         */
        property: string;
    }

    /**
     * <bean:parameter>
     * org.apache.struts.taglib.bean.ParameterTag
     *
     * @description
     * <p><strong>
     * Define a scripting variable based on the value(s) of the specified
     * request parameter.
     * </strong></p>
     * <p>Retrieve the value of the specified request parameter (as a single
     * value or multiple values, depending on the <code>multiple</code> attribute),
     * and define the result as a page scope attribute of type <code>String</code>
     * (if <code>multiple</code> is not specified) or <code>String[]</code>
     * (if <code>multiple</code> is specified).</p>
     * <p>If no request parameter with the specified name can be located, and
     * no default value is specified, a request time exception will be thrown.</p>
     */
    interface ParameterTagAttr {
        /**
         * <p>Specifies the name of the scripting variable (and associated page
         * scope attribute) that will be made available with the value of the
         * specified request parameter.</p>
         */
        id: string;

        /**
         * <p>If any arbitrary value for this attribute is specified, causes a call
         * to <code>ServletRequest.getParameterValues()</code> and a definition of
         * the result as a bean of type <code>String[]</code>.  Otherwise,
         * <code>ServletRequest.getParameter()</code> will be called, and a
         * definition of the result as a bean of type <code>String</code>
         * will be performed.</p>
         */
        multiple?: string;

        /**
         * <p>Specifies the name of the request parameter whose value, or values,
         * is to be retrieved.</p>
         */
        name: string;

        /**
         * <p>The default parameter value to return if no parameter with the
         * specified name was included in this request.</p>
         */
        value?: string;
    }

    /**
     * <bean:resource>
     * org.apache.struts.taglib.bean.ResourceTag
     *
     * @description
     * <p><strong>
     * Load a web application resource and make it available as a bean.
     * </strong></p>
     * <p>Retrieve the value of the specified web application resource, and make
     * it available as either a <code>InputStream</code> or a <code>String</code>,
     * depending on the value of the <code>input</code> attribute.</p>
     * <p>If a problem occurs while retrieving the specified resource, a
     * request time exception will be thrown.</p>
     */
    interface ResourceTagAttr {
        /**
         * <p>Specifies the name of the scripting variable (and associated page
         * scope attribute) that will be made available with the value of the
         * specified web application resource.</p>
         */
        id: string;

        /**
         * <p>If any arbitrary value for this attribute is specified, the resource
         * will be made available as an <code>InputStream</code>.  If this
         * attribute is not specified, the resource will be made available
         * as a <code>String</code>.</p>
         */
        input?: string;

        /**
         * <p>Module-relative name (starting with a '/') of the web application
         * resource to be loaded and made available.</p>
         */
        name: string;
    }

    /**
     * <bean:size>
     * org.apache.struts.taglib.bean.SizeTag
     *
     * @description
     * <p><strong>
     * Define a bean containing the number of elements in a Collection or Map.
     * </strong></p>
     * <p>Given a reference to an array, Collection or Map, creates a new bean, of
     * type <code>java.lang.Integer</code>, whose value is the number of elements
     * in that collection.  You can specify the collection to be counted in any
     * one of the following ways:</p>
     * <ul>
     * <li>As a runtime expression specified as the value of the
     * <code>collection</code> attribute.</li>
     * <li>As a JSP bean specified by the <code>name</code> attribute.</li>
     * <li>As the property, specified by the <code>property</code> attribute,
     * of the JSP bean specified by the <code>name</code> attribute.</li>
     * </ul>
     */
    interface SizeTagAttr {
        /**
         * <p>A runtime expression that evaluates to an array, a Collection, or
         * a Map.</p>
         */
        collection?: ArrayLike<any>;

        /**
         * <p>The name of a page scope JSP bean, of type
         * <code>java.lang.Integer</code>, that will be created to contain the
         * size of the underlying collection being counted.</p>
         */
        id: string;

        /**
         * <p>The name of the JSP bean (optionally constrained to the scope
         * specified by the <code>scope</code> attribute) that contains the
         * collection to be counted (if <code>property</code> is not specified),
         * or whose property getter is called to return the collection to be
         * counted (if <code>property</code> is specified.</p>
         */
        name?: string;

        /**
         * <p>The name of the property, of the bean specified by the
         * <code>name</code> attribute, whose getter method will return the
         * collection to be counted.</p>
         */
        property?: string;

        /**
         * <p>The bean scope within which to search for the JSP bean specified
         * by the <code>name</code> attribute.  If not specified, the available
         * scopes are searched in ascending sequence.</p>
         */
        scope?: string;
    }

    /**
     * <bean:struts>
     * org.apache.struts.taglib.bean.StrutsTag
     *
     * @description
     * <p><strong>
     * Expose a named Struts internal configuration object as a bean.
     * </strong></p>
     * <p>Retrieve the value of the specified Struts internal configuration
     * object, and define it as a scripting variable and as a page scope
     * attribute accessible to the remainder of the current page.  You must
     * specify exactly one of the <code>formBean</code>, <code>forward</code>,
     * and <code>mapping</code> attributes to select the configuration object
     * to be exposed.</p>
     * <p>If a problem occurs while retrieving the specified configuration
     * object, a request time exception will be thrown.</p>
     */
    interface StrutsTagAttr {
        /**
         * <p>Specifies the name of the scripting variable (and associated
         * page scope attribute) that will be made available with the value of
         * the specified Struts internal configuration object.</p>
         */
        id: string;

        /**
         * <p>Specifies the name of the Struts <code>ActionFormBean</code>
         * definition object to be exposed.</p>
         */
        formBean?: string;

        /**
         * <p>Specifies the name of the global Struts <code>ActionForward</code>
         * definition object to be exposed.</p>
         */
        forward?: string;

        /**
         * <p>Specifies the matching path of the Struts <code>ActionMapping</code>
         * definition object to be exposed.</p>
         */
        mapping?: string;
    }

    /**
     * <bean:write>
     * org.apache.struts.taglib.bean.WriteTag
     *
     * @description
     * <p><strong>
     * Render the value of the specified bean property to the current
     * JspWriter.
     * </strong></p>
     * <p>Retrieve the value of the specified bean property, and render it to the
     * current JspWriter as a String by the ways:</p>
     * <ul>
     * <li>If <code>format</code> attribute exists then value will be formatted on base of format
     * string from <code>format</code> attribute and default system locale.</li>
     * <li>If in resources exists format string for value data type (view <code>format</code>
     * attribute description) then value will be formatted on base of format string
     * from resources. Resources bundle and target locale can be specified with
     * <code>bundle</code> and <code>locale</code> attributes. If nothing specified then
     * default resource bundle and current user locale will be used.</li>
     * <li>If there is a PropertyEditor configured for the property value's class, the
     * <code>getAsText()</code> method will be called.</li>
     * <li>Otherwise, the usual <code>toString()</code> conversions will be applied.</li>
     * </ul>
     * <p>When a format string is provided, numeric values are formatted using the
     * <code>java.text.DecimalFormat</code> class; if the format string came from
     * a resource, the <code>applyLocalisedPattern()</code> method is used, and
     * <code>applyPattern()</code> is used otherwise. Dates are formatted using
     * the <code>SimpleDateFormat</code> class. For details of the specific format
     * patterns, please see the Javadocs for those classes.</p>
     * <p>If a problem occurs while retrieving the specified bean property, a
     * request time exception will be thrown.</p>
     */
    interface WriteTagAttr {
        /**
         * <p>The name of the application scope bean under which the
         * <code>MessageResources</code> object containing our messages
         * is stored.</p>
         */
        bundle?: string;

        /**
         * <p>If this attribute is set to <code>true</code>, the rendered property
         * value will be filtered for characters that are sensitive in HTML, and any
         * such characters will be replaced by their entity equivalents.</p>
         */
        filter?: string;

        /**
         * <p>Specifies the format string to use to convert bean or property value
         * to the <code>String</code>. If nothing specified, then default format
         * string for value data type will be searched in message resources by
         * according key.</p>
         * <!-- move to developers guide
         * <table>
         * <tr>
         * <td>Key to search format string</td>
         * <td>Data types</td>
         * </tr>
         * <tr>
         * <td>org.apache.struts.taglib.bean.format.int</td>
         * <td>java.lang.Byte, java.lang.Short, java.lang.Integer, java.lang.Long,
         * java.math.BigInteger</td>
         * </tr>
         * <tr>
         * <td>org.apache.struts.taglib.bean.format.float</td>
         * <td>java.lang.Float, java.lang.Double, java.math.BigDecimal</td>
         * </tr>
         * <tr>
         * <td>org.apache.struts.taglib.bean.format.sql.timestamp</td>
         * <td>java.sql.Timestamp</td>
         * </tr>
         * <tr>
         * <td>org.apache.struts.taglib.bean.format.sql.date</td>
         * <td>java.sql.Date</td>
         * </tr>
         * <tr>
         * <td>org.apache.struts.taglib.bean.format.sql.time</td>
         * <td>java.sql.Time</td>
         * </tr>
         * <tr>
         * <td>org.apache.struts.taglib.bean.format.date</td>
         * <td>java.util.Date</td>
         * </tr>
         * </table>
         * <p>Default format strings in resources can be written as -
         * <pre>
         * org.apache.struts.taglib.bean.format.int=######
         * org.apache.struts.taglib.bean.format.float=######,####
         * org.apache.struts.taglib.bean.format.sql.timestamp=hh 'o''clock' a, zzzz
         * org.apache.struts.taglib.bean.format.sql.date=EEE, MMM d, ''yy
         * org.apache.struts.taglib.bean.format.sql.time=h:mm a
         * org.apache.struts.taglib.bean.format.date=hh 'o''clock' a, zzzz
         * </pre>
         * <br />values for resource file entries are standart Java format strings for
         * date, time and number values.</p>
         * -->
         */
        format?: string;

        /**
         * <p>Specifies the key to search format string in application resources.</p>
         */
        formatKey?: string;

        /**
         * <p>If this attribute is set to <code>true</code>, and the bean specified
         * by the <code>name</code> and <code>scope</code> attributes does not
         * exist, simply return without writing anything.  If this attribute is
         * set to <code>false</code>, a runtime exception to be thrown,
         * consistent with the other tags in this tag library.</p>
         */
        ignore?: string;

        /**
         * <p>The name of the session scope bean under which our currently
         * selected <code>Locale</code> object is stored.</p>
         */
        locale?: string;

        /**
         * <p>Specifies the attribute name of the bean whose property is accessed
         * to retrieve the value specified by <code>property</code> (if
         * specified).  If <code>property</code> is not specified, the value of
         * this bean itself will be rendered.</p>
         */
        name: string;

        /**
         * <p>Specifies the name of the property to be accessed on the bean
         * specified by <code>name</code>.  This value may be a simple, indexed,
         * or nested property reference expression.  If not specified, the bean
         * identified by <code>name</code> will itself be rendered.  If the
         * specified property returns null, no output will be rendered.</p>
         */
        property?: string;

        /**
         * <p>Specifies the variable scope searched to retrieve the bean specified
         * by <code>name</code>.  If not specified, the default rules applied by
         * <code>PageContext.findAttribute()</code> are applied.</p>
         */
        scope?: string;
    }
}
