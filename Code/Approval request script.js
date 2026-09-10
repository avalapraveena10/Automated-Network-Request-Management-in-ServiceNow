(function refineQuery (current, parent) {
    // Add your code here, such as current.addQuery(field, value);
    current.addQuery('source_table', parent.getTableName());
    current.addQuery('document_id', parent.sys_id);
})(current, parent);
